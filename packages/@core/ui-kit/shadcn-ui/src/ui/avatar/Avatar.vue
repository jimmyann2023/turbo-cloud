<script setup lang="ts">
import { cn } from '@repo-core/shared/utils';

import { AvatarRoot } from 'radix-vue';

import { avatarVariant, type AvatarVariants } from './avatar';

// https://www.radix-vue.com/components/avatar.html

const props = withDefaults(
  defineProps<{
    class?: any;
    shape?: AvatarVariants['shape'];
    size?: AvatarVariants['size'];
  }>(),
  {
    shape: 'circle',
    size: 'sm',
  },
);
</script>

<template>
  <!-- cn(): avatarVariant({ size, shape }) 生成的类名和 props.class 中的类名合并-->
  <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
    <slot></slot>
  </AvatarRoot>
</template>
