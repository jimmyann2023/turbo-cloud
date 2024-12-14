<script setup lang="ts">
import { Button } from '@repo-core/shadcn-ui';
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <Button>默认按钮</Button>
    <Button variant="secondary">次要按钮</Button>
    <Button variant="destructive">危险按钮</Button>
    <Button variant="outline">轮廓按钮</Button>
    <Button variant="ghost">幽灵按钮</Button>
    <Button variant="link">链接按钮</Button>
    <Button variant="heavy">重要按钮</Button>
  </div>
</template>
