<!--
  @component Accordion
  @description 手风琴/折叠面板组件，用于展示可折叠的内容列表。
  基于 radix-vue 的 Accordion 组件构建，提供了无障碍访问支持。
  
  @example
  ```vue
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>标题 1</AccordionTrigger>
      <AccordionContent>内容 1</AccordionContent>
    </AccordionItem>
  </Accordion>
  ```
-->
<script setup lang="ts">
import type { AccordionRootEmits, AccordionRootProps } from 'radix-vue';

import { AccordionRoot, useForwardPropsEmits } from 'radix-vue';

const props = defineProps<AccordionRootProps>();
const emits = defineEmits<AccordionRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <AccordionRoot v-bind="forwarded">
    <slot></slot>
  </AccordionRoot>
</template>
