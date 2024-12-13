# Button 按钮

按钮用于开始一个即时操作。

## 基础用法

:::demo 使用 `variant` 属性来定义按钮的样式。

```vue
<template>
  <div class="flex gap-4">
    <Button>默认按钮</Button>
    <Button variant="primary">主要按钮</Button>
    <Button variant="destructive">危险按钮</Button>
    <Button variant="outline">边框按钮</Button>
  </div>
</template>
```

:::

## 按钮尺寸

:::demo 使用 `size` 属性来定义按钮的大小。

```vue
<template>
  <div class="flex items-center gap-4">
    <Button size="sm">小型按钮</Button>
    <Button>默认按钮</Button>
    <Button size="lg">大型按钮</Button>
  </div>
</template>
```

:::

## API

### Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| variant | 'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link' | 'default' | 按钮变体 |
| size | 'default' \| 'sm' \| 'lg' \| 'icon' | 'default' | 按钮尺寸 |
| disabled | boolean | false | 是否禁用 |

### Events

| 名称  | 参数                | 说明           |
| ----- | ------------------- | -------------- |
| click | (event: MouseEvent) | 点击按钮时触发 |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 按钮内容 |
