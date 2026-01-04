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
      { text: '快速入门', link: '/快速入门/基础入门' },
      { text: '节点文档', link: '/节点/事件/世界事件/当运行【斜杠】mgrun命令时' }
    ],
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024-present Maingraph Team'
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
      {
        text: '文档概览',
        items: [
          { text: '首页', link: '/概览/首页' }
        ]
      },
      {
        text: '快速入门',
        collapsed: false,
        items: [
          { text: '基础入门', link: '/快速入门/基础入门' },
          { text: '核心概念', link: '/快速入门/核心概念' }
        ]
      },
      {
        text: '编辑器使用',
        collapsed: false,
        items: [
          { text: '数据类型', link: '/编辑器使用/数据类型' },
          { text: '搜索技巧', link: '/编辑器使用/搜索技巧' }
        ]
      },
      {
        text: '命令参考',
        collapsed: false,
        items: [
          { text: 'mgrun', link: '/命令/mgrun' }
        ]
      },
      {
        text: '进阶指南',
        collapsed: false,
        items: [
          { text: '递归深度限制', link: '/进阶指南/递归深度限制' }
        ]
      },
      {
        text: '节点列表',
        collapsed: false,
        items: [
          {
            text: '事件',
            collapsed: true,
            items: [
              {
                text: '世界事件',
                items: [
                  { text: '当运行 /mgrun 命令时', link: '/节点/事件/世界事件/当运行【斜杠】mgrun命令时' }
                ]
              },
              {
                text: '玩家事件',
                items: [
                  { text: '当玩家使用物品', link: '/节点/事件/玩家事件/当玩家使用物品' },
                  { text: '当玩家受到伤害', link: '/节点/事件/玩家事件/当玩家受到伤害' },
                  { text: '当玩家复活时', link: '/节点/事件/玩家事件/当玩家复活时' },
                  { text: '当玩家放置方块时', link: '/节点/事件/玩家事件/当玩家放置方块时' },
                  { text: '当玩家敲击时', link: '/节点/事件/玩家事件/当玩家敲击时' },
                  { text: '当玩家死亡时', link: '/节点/事件/玩家事件/当玩家死亡时' },
                  { text: '当玩家点击方块时', link: '/节点/事件/玩家事件/当玩家点击方块时' },
                  { text: '当玩家破坏方块时', link: '/节点/事件/玩家事件/当玩家破坏方块时' },
                  { text: '当玩家移动', link: '/节点/事件/玩家事件/当玩家移动' },
                  { text: '当玩家进入游戏时', link: '/节点/事件/玩家事件/当玩家进入游戏时' }
                ]
              },
              {
                text: '生物事件',
                items: [
                  { text: '当生物受到伤害时', link: '/节点/事件/生物事件/当生物受到伤害时' },
                  { text: '当生物在世界中生成时', link: '/节点/事件/生物事件/当生物在世界中生成时' },
                  { text: '当生物死亡时', link: '/节点/事件/生物事件/当生物死亡时' }
                ]
              }
            ]
          },
          {
            text: '动作',
            collapsed: true,
            items: [
              {
                text: '世界动作',
                items: [
                  { text: '播放粒子效果', link: '/节点/动作/世界动作/播放粒子效果' },
                  { text: '爆炸', link: '/节点/动作/世界动作/爆炸' }
                ]
              },
              {
                text: '玩家动作',
                items: [
                  { text: '打印到聊天栏', link: '/节点/动作/玩家动作/打印到聊天栏' },
                  { text: '玩家执行命令', link: '/节点/动作/玩家动作/玩家执行命令' }
                ]
              }
            ]
          },
          {
            text: '变量',
            collapsed: true,
            items: [
              { text: '获取变量', link: '/节点/变量/获取变量' },
              { text: '设置变量', link: '/节点/变量/设置变量' },
              {
                text: '列表',
                items: [
                  { text: '从列表中随机抽取', link: '/节点/变量/列表/从列表中随机抽取' },
                  { text: '从列表删除', link: '/节点/变量/列表/从列表删除' },
                  { text: '分割字符串', link: '/节点/变量/列表/分割字符串' },
                  { text: '列表包含', link: '/节点/变量/列表/列表包含' },
                  { text: '合并列表', link: '/节点/变量/列表/合并列表' },
                  { text: '添加到列表', link: '/节点/变量/列表/添加到列表' },
                  { text: '获取列表长度', link: '/节点/变量/列表/获取列表长度' },
                  { text: '获取列表项', link: '/节点/变量/列表/获取列表项' },
                  { text: '设置列表项', link: '/节点/变量/列表/设置列表项' }
                ]
              },
              {
                text: '字符串',
                items: [
                  { text: '多字符串组合', link: '/节点/变量/字符串/多字符串组合' },
                  { text: '大小写转换-修剪', link: '/节点/变量/字符串/大小写转换-修剪' },
                  { text: '字符串', link: '/节点/变量/字符串/字符串' },
                  { text: '字符串包含', link: '/节点/变量/字符串/字符串包含' },
                  { text: '截取子字符串', link: '/节点/变量/字符串/截取子字符串' },
                  { text: '替换字符串', link: '/节点/变量/字符串/替换字符串' },
                  { text: '获取字符串长度', link: '/节点/变量/字符串/获取字符串长度' },
                  { text: '连接字符串', link: '/节点/变量/字符串/连接字符串' }
                ]
              },
              {
                text: '实体',
                items: [
                  { text: '获取实体信息', link: '/节点/变量/实体/获取实体信息' }
                ]
              },
              {
                text: '布尔值',
                items: [
                  { text: '布尔值', link: '/节点/变量/布尔值/布尔值' }
                ]
              },
              {
                text: '浮点数',
                items: [
                  { text: '浮点数', link: '/节点/变量/浮点数/浮点数' }
                ]
              }
            ]
          },
          {
            text: '逻辑',
            collapsed: true,
            items: [
              {
                text: '布尔逻辑',
                items: [
                  { text: '布尔逻辑', link: '/节点/逻辑/布尔逻辑/布尔逻辑' }
                ]
              },
              {
                text: '数学与转换',
                items: [
                  { text: '乘法', link: '/节点/逻辑/数学与转换/乘法' },
                  { text: '减法', link: '/节点/逻辑/数学与转换/减法' },
                  { text: '加法', link: '/节点/逻辑/数学与转换/加法' },
                  { text: '区间限定', link: '/节点/逻辑/数学与转换/区间限定' },
                  { text: '取模', link: '/节点/逻辑/数学与转换/取模' },
                  { text: '向上取整', link: '/节点/逻辑/数学与转换/向上取整' },
                  { text: '向下取整', link: '/节点/逻辑/数学与转换/向下取整' },
                  { text: '四舍五入', link: '/节点/逻辑/数学与转换/四舍五入' },
                  { text: '最大值', link: '/节点/逻辑/数学与转换/最大值' },
                  { text: '最小值', link: '/节点/逻辑/数学与转换/最小值' },
                  { text: '类型转换', link: '/节点/逻辑/数学与转换/类型转换' },
                  { text: '绝对值', link: '/节点/逻辑/数学与转换/绝对值' },
                  { text: '除法', link: '/节点/逻辑/数学与转换/除法' },
                  { text: '随机布尔值', link: '/节点/逻辑/数学与转换/随机布尔值' },
                  { text: '随机整数', link: '/节点/逻辑/数学与转换/随机整数' },
                  { text: '随机浮点数', link: '/节点/逻辑/数学与转换/随机浮点数' }
                ]
              },
              {
                text: '比较',
                items: [
                  { text: '数值比较', link: '/节点/逻辑/比较/数值比较' }
                ]
              },
              {
                text: '流程控制',
                items: [
                  { text: '分支', link: '/节点/逻辑/流程控制/分支' },
                  { text: '多分支', link: '/节点/逻辑/流程控制/多分支' },
                  { text: '有限循环', link: '/节点/逻辑/流程控制/有限循环' },
                  { text: '跳出循环', link: '/节点/逻辑/流程控制/跳出循环' }
                ]
              }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maingraph-project/for-mc' }
    ]
  }
})
