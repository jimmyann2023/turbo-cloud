<script setup lang="ts">
import { Button } from '@repo-core/shadcn-ui';
</script>

<template>
  <div class="flex flex-col gap-4">
    <!-- 变体示例 -->
    <div class="flex flex-wrap gap-4">
      <Button>默认按钮</Button>
      <Button variant="secondary">次要按钮</Button>
      <Button variant="destructive">危险按钮</Button>
      <Button variant="outline">轮廓按钮</Button>
      <Button variant="ghost">幽灵按钮</Button>
      <Button variant="link">链接按钮</Button>
      <Button variant="heavy">重要按钮</Button>
    </div>

    <!-- 尺寸示例 -->
    <div class="flex flex-wrap items-center gap-4">
      <Button size="lg">大按钮</Button>
      <Button>默认按钮</Button>
      <Button size="sm">小按钮</Button>
      <Button size="xs">超小按钮</Button>
    </div>

    <!-- 图标按钮示例 -->
    <div class="flex flex-wrap items-center gap-4">
      <Button size="icon" variant="outline">
        <i class="i-lucide-settings"></i>
      </Button>
      <Button size="icon" variant="ghost">
        <i class="i-lucide-bell"></i>
      </Button>
    </div>
  </div>
</template>
