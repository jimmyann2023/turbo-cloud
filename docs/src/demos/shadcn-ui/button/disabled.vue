<script setup lang="ts">
import { Button } from '@repo-core/shadcn-ui';
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <Button disabled>默认按钮</Button>
    <Button disabled variant="secondary">次要按钮</Button>
    <Button disabled variant="destructive">危险按钮</Button>
    <Button disabled variant="outline">轮廓按钮</Button>
  </div>
</template>
