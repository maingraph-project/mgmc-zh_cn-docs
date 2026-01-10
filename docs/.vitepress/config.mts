import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Maingraph For MC",
  description: "Minecraft 可视化蓝图 Mod 文档",
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  lastUpdated: true,
  themeConfig: {
    logo: '/icon.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
    ],
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026 Yang Borui'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面大纲'
    },
    lastUpdatedText: '最后更新于',

    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maingraph-project/for-mc' }
    ]
  }
})
