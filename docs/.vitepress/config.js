import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/docs/',
  title: '技术文档',
  description: '技术学习文档集合',
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/AI/AIGC' }
    ],
    
    sidebar: {
      '/': [
        {
          text: 'AI',
          items: [
            { text: 'AIGC', link: '/AI/AIGC' },
            { text: 'COZE & DIFY', link: '/AI/COZE_DIFY' },
            { text: 'DashScope & ModelScope', link: '/AI/DashScope_ModelScope' },
            { text: 'DDG & SERPAPI', link: '/AI/DDG_SERPAPI' },
            { text: 'FAISS', link: '/AI/FAISS' },
            { text: 'GPT架构', link: '/AI/GPT架构' },
            { text: 'LANGCHAIN', link: '/AI/LANGCHAIN' },
            { text: 'LCEL', link: '/AI/LCEL' },
            { text: 'MODELS', link: '/AI/MODELS' },
            { text: 'MOE', link: '/AI/MOE' },
            { text: 'NLP', link: '/AI/NLP' },
            { text: 'QIANWEN VL', link: '/AI/QIANWEN_VL' },
            { text: 'SERPAPI', link: '/AI/SERPAPI' },
            { text: 'WORD2VEC', link: '/AI/WORD2VEC' },
            { text: '大模型应用开发模式', link: '/AI/大模型应用开发模式' },
            { text: '智能体系统设计', link: '/AI/智能体系统设计' },
            { text: '稠密向量-稀疏向量', link: '/AI/稠密向量-稀疏向量' }
          ]
        }
      ],
      '/AI/': [
        {
          text: 'AI',
          items: [
            { text: 'AIGC', link: '/AI/AIGC' },
            { text: 'COZE & DIFY', link: '/AI/COZE_DIFY' },
            { text: 'DashScope & ModelScope', link: '/AI/DashScope_ModelScope' },
            { text: 'DDG & SERPAPI', link: '/AI/DDG_SERPAPI' },
            { text: 'FAISS', link: '/AI/FAISS' },
            { text: 'GPT架构', link: '/AI/GPT架构' },
            { text: 'LANGCHAIN', link: '/AI/LANGCHAIN' },
            { text: 'LCEL', link: '/AI/LCEL' },
            { text: 'MODELS', link: '/AI/MODELS' },
            { text: 'MOE', link: '/AI/MOE' },
            { text: 'NLP', link: '/AI/NLP' },
            { text: 'QIANWEN VL', link: '/AI/QIANWEN_VL' },
            { text: 'SERPAPI', link: '/AI/SERPAPI' },
            { text: 'WORD2VEC', link: '/AI/WORD2VEC' },
            { text: '大模型应用开发模式', link: '/AI/大模型应用开发模式' },
            { text: '智能体系统设计', link: '/AI/智能体系统设计' },
            { text: '稠密向量-稀疏向量', link: '/AI/稠密向量-稀疏向量' }
          ]
        }
      ]
    },
    
    socialLinks: [
      // 可以添加 GitHub 等链接
    ],
    
    footer: {
      message: '技术文档集合',
      copyright: 'Copyright © 2024'
    }
  }
})

