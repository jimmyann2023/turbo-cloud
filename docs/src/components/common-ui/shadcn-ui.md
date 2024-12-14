# @repo-shadcn-ui/ui 组件

@repo-shadcn-ui/ui 是一个基于 [shadcn/ui](https://ui.shadcn.com/) 的组件库，提供了一系列美观、可定制的 Vue 组件。

## 组件列表

### 布局组件

- [Accordion 手风琴](./shadcn-ui/accordion.md)
- [Card 卡片](./shadcn-ui/card.md)
- [Dialog 对话框](./shadcn-ui/dialog.md)
- [Drawer 抽屉](./shadcn-ui/drawer.md)
- [Tabs 标签页](./shadcn-ui/tabs.md)

### 表单组件

- [Button 按钮](./shadcn-ui/button.md)
- [Checkbox 复选框](./shadcn-ui/checkbox.md)
- [Input 输入框](./shadcn-ui/input.md)
- [Radio Group 单选组](./shadcn-ui/radio-group.md)
- [Select 选择器](./shadcn-ui/select.md)
- [Switch 开关](./shadcn-ui/switch.md)

### 数据展示

- [Table 表格](./shadcn-ui/table.md)
- [Badge 徽章](./shadcn-ui/badge.md)
- [Avatar 头像](./shadcn-ui/avatar.md)

### 反馈组件

- [Alert 警告提示](./shadcn-ui/alert.md)
- [Toast 消息提示](./shadcn-ui/toast.md)
- [Progress 进度条](./shadcn-ui/progress.md)

## 安装

```bash
pnpm add @repo-shadcn-ui/ui
```

## 使用示例

```vue
<template>
  <div>
    <Input v-model="inputValue" placeholder="请输入..." />
    <Button @click="handleClick">点击按钮</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const inputValue = ref('');

const handleClick = () => {
  console.log('按钮被点击');
};
</script>
```

## 主题定制

@repo-shadcn-ui/ui 支持主题定制，你可以通过修改 CSS 变量来自定义组件的样式：

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... 其他主题变量 */
}
```

## 注意事项

1. 所有组件都遵循 Vue 3 的组合式 API 风格。
2. 组件支持 TypeScript，提供完整的类型定义。
3. 使用 `v-model` 进行双向数据绑定。
4. 事件命名采用 kebab-case 格式（如 `@update:model-value`）。
5. 样式类名使用 `class` 而不是 `className`。
6. 插槽使用 Vue 的具名插槽语法。
