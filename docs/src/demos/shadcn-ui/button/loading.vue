<script setup lang="ts">
import { Button } from '@repo-core/shadcn-ui';
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <Button loading>加载中</Button>
    <Button loading variant="secondary">加载中</Button>
    <Button loading variant="outline">加载中</Button>
  </div>
</template>
