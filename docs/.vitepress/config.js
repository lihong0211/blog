import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: '技术文档',
  description: '技术学习文档集合',
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
    ],
    socialLinks: [
      // 可以添加 GitHub 等链接
    ],
    
    footer: {
      message: '技术文档集合',
      copyright: 'Copyright © 2024'
    }
  }
})

