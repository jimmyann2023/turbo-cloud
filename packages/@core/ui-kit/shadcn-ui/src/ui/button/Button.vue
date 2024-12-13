<!--
  @component Button
  @description 一个可定制的按钮组件，支持多种变体和尺寸。基于 radix-vue 的 Primitive 组件构建。
  @example
  ```vue
  <Button variant="primary" size="default">点击我 </Button>
  ```
  -->
<script setup lang="ts">
import type { ButtonVariants, ButtonVariantSize } from './types';

import { cn } from '@repo-core/shared/utils';

import { Primitive, type PrimitiveProps } from 'radix-vue';

import { buttonVariants } from './button';

/**
 * 按钮组件的属性接口
 * @interface Props
 * @extends {PrimitiveProps} - 继承自 radix-vue 的 Primitive 组件属性
 * @property {any} [class] - 自定义类名
 * @property {ButtonVariantSize} [size] - 按钮尺寸
 * @property {ButtonVariants} [variant] - 按钮变体样式
 */
interface Props extends PrimitiveProps {
  class?: any;
  size?: ButtonVariantSize;
  variant?: ButtonVariants;
}

/**
 * 按钮组件的默认属性
 * @constant props
 * @type {Props}
 * @default
 * {
 *   as: 'button',
 *   class: ''
 * }
 */
const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  class: '',
});
</script>

<template>
  <!-- 
  使用 radix-vue 的 Primitive 组件作为基础 通过 buttonVariants 函数生成样式类名
  支持自定义元素类型（as）和样式（class）
-->
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot></slot>
  </Primitive>
</template>
