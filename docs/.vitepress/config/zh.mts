import { DefaultTheme, defineConfig } from 'vitepress';

export const zh = defineConfig({
  description: 'Cloud Mold System & 企业级管理系统框架',
  lang: 'zh-Hans',
  themeConfig: {
    darkModeSwitchLabel: '主题',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: {
      next: '下一页',
      prev: '上一页',
    },
    editLink: {
      pattern:
        'https://github.com/https://github.com/jimmyann2023/turbo-cloud/edit/main/docs/src/:path',
      text: '在 GitHub 上编辑此页面',
    },
    footer: {
      copyright: `Copyright 2023-${new Date().getFullYear()} Jimmy Ann`,
      message: '基于 MIT 许可发布.',
    },
    langMenuLabel: '多语言',
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
      text: '最后更新于',
    },
    lightModeSwitchTitle: '切换到浅色模式',
    nav: [
      { link: '/guide/', text: '指南' },
      { link: '/components/', text: '组件' },
      { link: '/api/', text: 'API' },
      {
        text: '相关链接',
        items: [
          {
            link: 'https://github.com/jimmyann2023/turbo-cloud',
            text: 'GitHub',
          },
        ],
      },
    ],
    outline: {
      label: '页面导航',
    },
    returnToTopLabel: '回到顶部',
    sidebar: {
      '/components/': { base: '/components/', items: sidebarComponents() },
      '/guide/': { base: '/guide/', items: sidebarGuide() },
    },
    sidebarMenuLabel: '菜单',
  },
});

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      collapsed: false,
      text: '简介',
      items: [
        {
          link: 'introduction/cloud',
          text: '关于 Cloud System',
        },
        { link: 'introduction/quick-start', text: '快速开始' },
        {
          base: '/',
          link: 'components/introduction',
          text: '组件文档',
        },
      ],
    },
    {
      text: '基础',
      items: [
        { link: 'essentials/concept', text: '基础概念' },
        { link: 'essentials/development', text: '本地开发' },
        { link: 'essentials/route', text: '路由和菜单' },
        { link: 'essentials/settings', text: '配置' },
        { link: 'essentials/icons', text: '图标' },
        { link: 'essentials/styles', text: '样式' },
        { link: 'essentials/external-module', text: '外部模块' },
        { link: 'essentials/build', text: '构建与部署' },
        { link: 'essentials/server', text: '服务端交互与数据Mock' },
      ],
    },
    {
      text: '深入',
      items: [
        { link: 'in-depth/login', text: '登录' },
        // { link: 'in-depth/layout', text: '布局' },
        { link: 'in-depth/theme', text: '主题' },
        { link: 'in-depth/access', text: '权限' },
        { link: 'in-depth/locale', text: '国际化' },
        { link: 'in-depth/features', text: '常用功能' },
        { link: 'in-depth/check-updates', text: '检查更新' },
        { link: 'in-depth/loading', text: '全局loading' },
        { link: 'in-depth/ui-framework', text: '组件库切换' },
      ],
    },
    {
      text: '工程',
      items: [
        { link: 'project/standard', text: '规范' },
        { link: 'project/cli', text: 'CLI' },
        { link: 'project/dir', text: '目录说明' },
        { link: 'project/test', text: '单元测试' },
        { link: 'project/tailwindcss', text: 'Tailwind CSS' },
        { link: 'project/changeset', text: 'Changeset' },
        { link: 'project/vite', text: 'Vite Config' },
      ],
    },
    {
      text: '其他',
      items: [
        { link: 'other/project-update', text: '项目更新' },
        { link: 'other/remove-code', text: '移除代码' },
        { link: 'other/faq', text: '常见问题' },
      ],
    },
  ];
}

function sidebarComponents(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '组件',
      items: [
        {
          link: 'introduction',
          text: '介绍',
        },
      ],
    },
    {
      collapsed: false,
      text: '布局组件',
      items: [
        {
          link: 'layout-ui/page',
          text: 'Page 页面',
        },
      ],
    },
    {
      collapsed: false,
      text: 'UI组件',
      items: [
        {
          link: 'shadcn-ui/button',
          text: 'Button 按钮',
        },
        {
          link: 'shadcn-ui/input',
          text: 'Input 输入框',
        },
        {
          link: 'shadcn-ui/dialog',
          text: 'Dialog 对话框',
        },
        {
          link: 'shadcn-ui/select',
          text: 'Select 选择框',
        },
        {
          link: 'shadcn-ui/checkbox',
          text: 'Checkbox 复选框',
        },
        {
          link: 'shadcn-ui/radio-group',
          text: 'Radio Group 单选框组',
        },
        {
          link: 'shadcn-ui/switch',
          text: 'Switch 开关',
        },
        {
          link: 'shadcn-ui/textarea',
          text: 'Textarea 文本域',
        },
        {
          link: 'shadcn-ui/accordion',
          text: 'Accordion 手风琴',
        },
        {
          link: 'shadcn-ui/card',
          text: 'Card 卡片',
        },
        {
          link: 'shadcn-ui/tabs',
          text: 'Tabs 标签页',
        },
        {
          link: 'shadcn-ui/toast',
          text: 'Toast 提示',
        },
        {
          link: 'shadcn-ui/tooltip',
          text: 'Tooltip 文字提示',
        },
        {
          link: 'shadcn-ui/alert',
          text: 'Alert 警告提示',
        },
        {
          link: 'shadcn-ui/avatar',
          text: 'Avatar 头像',
        },
        {
          link: 'shadcn-ui/badge',
          text: 'Badge 徽标',
        },
        {
          link: 'shadcn-ui/calendar',
          text: 'Calendar 日历',
        },
        {
          link: 'shadcn-ui/popover',
          text: 'Popover 弹出框',
        },
        {
          link: 'shadcn-ui/progress',
          text: 'Progress 进度条',
        },
        {
          link: 'shadcn-ui/slider',
          text: 'Slider 滑块',
        },
        {
          link: 'shadcn-ui/table',
          text: 'Table 表格',
        },
        {
          link: 'shadcn-ui/toggle',
          text: 'Toggle 切换',
        },
        {
          link: 'shadcn-ui/separator',
          text: 'Separator 分割线',
        },
        {
          link: 'shadcn-ui/scroll-area',
          text: 'Scroll Area 滚动区域',
        },
        {
          link: 'shadcn-ui/sheet',
          text: 'Sheet 抽屉',
        },
        {
          link: 'shadcn-ui/skeleton',
          text: 'Skeleton 骨架屏',
        },
      ],
    },
    {
      collapsed: false,
      text: '通用组件',
      items: [
        {
          link: 'common-ui/cloud-api-component',
          text: 'ApiComponent Api组件包装器',
        },
        {
          link: 'common-ui/cloud-modal',
          text: 'Modal 模态框',
        },
        {
          link: 'common-ui/cloud-drawer',
          text: 'Drawer 抽屉',
        },
        {
          link: 'common-ui/cloud-form',
          text: 'Form 表单',
        },
        {
          link: 'common-ui/cloud-vxe-table',
          text: 'Vxe Table 表格',
        },
        {
          link: 'common-ui/cloud-count-to-animator',
          text: 'CountToAnimator 数字动画',
        },
      ],
    },
  ];
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  root: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonAriaLabel: '搜索文档',
        buttonText: '搜索文档',
      },
      modal: {
        errorScreen: {
          helpText: '你可能需要检查你的网络连接',
          titleText: '无法获取结果',
        },
        footer: {
          closeText: '关闭',
          navigateText: '切换',
          searchByText: '搜索提供者',
          selectText: '选择',
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          reportMissingResultsLinkText: '点击反馈',
          reportMissingResultsText: '你认为该查询应该有结果？',
          suggestedQueryText: '你可以尝试查询',
        },
        searchBox: {
          cancelButtonAriaLabel: '取消',
          cancelButtonText: '取消',
          resetButtonAriaLabel: '清除查询条件',
          resetButtonTitle: '清除查询条件',
        },
        startScreen: {
          favoriteSearchesTitle: '收藏',
          noRecentSearchesText: '没有搜索历史',
          recentSearchesTitle: '搜索历史',
          removeFavoriteSearchButtonTitle: '从收藏中移除',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          saveRecentSearchButtonTitle: '保存至搜索历史',
        },
      },
    },
  },
};

// export default defineConfig({
//   description: '现代化的云开发平台',
//   lang: 'zh-CN',
//   lastUpdated: true,
//   themeConfig: {
//     footer: {
//       copyright: 'Copyright 2023-present Jimmy Ann',
//       message: 'Released under the MIT License.',
//     },
//     logo: '/logo.png',

//     nav: [
//       { link: '/guide/', text: '指南' },
//       { link: '/components/', text: '组件' },
//       { link: '/api/', text: 'API' },
//       {
//         text: '相关链接',
//         items: [
//           {
//             link: 'https://github.com/jimmyann2023/turbo-cloud',
//             text: 'GitHub',
//           },
//         ],
//       },
//     ],

//     search: {
//       provider: 'local',
//     },

//     sidebar: {
//       '/components/': [
//         {
//           text: '基础组件',
//           items: [
//             { link: '/components/button', text: 'Button 按钮' },
//             { link: '/components/input', text: 'Input 输入框' },
//             { link: '/components/select', text: 'Select 选择器' },
//           ],
//         },
//       ],
//       '/guide/': [
//         {
//           text: '介绍',
//           items: [
//             { link: '/guide/what-is-turbo-cloud', text: '什么是 Turbo Cloud?' },
//             { link: '/guide/getting-started', text: '快速开始' },
//           ],
//         },
//       ],
//     },

//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/jimmyann2023/turbo-cloud' },
//     ],
//   },

//   title: 'Turbo Cloud',
// });
