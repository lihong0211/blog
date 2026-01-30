#!/usr/bin/env node
/**
 * 从 LeetCode 获取题目描述并注入到题解 .md 文件中
 * 用法: node scripts/inject-leetcode-description.mjs [--force]
 *  --force  强制重新生成，覆盖已有的题目描述
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ALGO_DIR = join(__dirname, '../docs/算法');
const README_PATH = join(ALGO_DIR, 'README.md');

// 从 README 解析 题目编号 -> LeetCode slug 的映射
function parseSlugMapping() {
  const readme = readFileSync(README_PATH, 'utf-8');
  const mapping = {};
  const regex = /\|\s*(\d+)\s*\|[^|]+\|\s*\[LeetCode\]\((https:\/\/leetcode\.cn\/problems\/([^/]+)\/)\)\s*\|/g;
  let match;
  while ((match = regex.exec(readme)) !== null) {
    mapping[match[1]] = match[3];
  }
  return mapping;
}

// 从 LeetCode CN GraphQL 获取中文题目描述
async function fetchProblemContent(slug) {
  const query = `
    query questionContent($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        translatedTitle
        translatedContent
        difficulty
      }
    }
  `;
  const res = await fetch('https://leetcode.cn/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      'Referer': 'https://leetcode.cn/',
    },
    body: JSON.stringify({ query, variables: { titleSlug: slug } }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0]?.message || 'GraphQL Error');
  return json.data?.question;
}

// 将 LeetCode 返回的 HTML 转为简化的 Markdown
function htmlToMarkdown(html) {
  if (!html) return '';
  return html
    .replace(/<pre>[\s\S]*?<code>([\s\S]*?)<\/code>[\s\S]*?<\/pre>/gi, '```\n$1\n```')
    .replace(/<code>([^<]*)<\/code>/g, '`$1`')
    .replace(/<strong>([^<]*)<\/strong>/g, '**$1**')
    .replace(/<em>([^<]*)<\/em>/g, '*$1*')
    .replace(/<p>([^<]*)<\/p>/g, '$1\n\n')
    .replace(/<li>([^<]*)<\/li>/g, '- $1\n')
    .replace(/<ul>|<\/ul>|<ol>|<\/ol>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// 检查文件是否已有题目描述
function hasDescription(content) {
  return /##\s*题目描述\s*\n/.test(content);
}

async function main() {
  const force = process.argv.includes('--force');
  const slugMap = parseSlugMapping();
  const files = readdirSync(ALGO_DIR).filter(
    (f) => f.endsWith('.md') && f !== 'README.md' && f !== 'index.md' && !['二分查找', '动态规划', '排序算法'].some((t) => f.includes(t))
  );

  let updated = 0;
  let skipped = 0;
  let failed = 0;

  for (const file of files) {
    const num = file.match(/^(\d+)\./)?.[1];
    if (!num || !slugMap[num]) {
      skipped++;
      continue;
    }

    const filePath = join(ALGO_DIR, file);
    let content = readFileSync(filePath, 'utf-8');

    if (hasDescription(content) && !force) {
      skipped++;
      continue;
    }

    // 强制模式：移除已有的题目描述（从 ## 题目描述 到 ## 题解代码 之前）
    if (force && hasDescription(content)) {
      content = content.replace(/##\s*题目描述[\s\S]*?(?=\n##\s*题解代码)/, '');
    }

    try {
      const question = await fetchProblemContent(slugMap[num]);
      // 优先使用中文 translatedContent，若无则回退到 content
      const rawContent = question?.translatedContent || question?.content;
      if (!rawContent) {
        failed++;
        console.warn(`[跳过] ${file}: 未获取到题目内容`);
        continue;
      }

      const desc = htmlToMarkdown(rawContent);
      const difficulty = question.difficulty || '';

      const descSection = `
## 题目描述

${desc}

**难度：** ${difficulty}

---

`;
      // 在 "## 题解代码" 之前插入
      content = content.replace(/(##\s*题解代码)/, descSection + '$1');
      writeFileSync(filePath, content);
      updated++;
      console.log(`[完成] ${file}`);
    } catch (err) {
      failed++;
      console.warn(`[失败] ${file}:`, err.message);
    }

    // 避免请求过快
    await new Promise((r) => setTimeout(r, 300));
  }

  console.log(`\n完成: 更新 ${updated}, 跳过 ${skipped}, 失败 ${failed}`);
}

main().catch(console.error);
