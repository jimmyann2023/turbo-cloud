<script setup lang="ts">
import { Button } from '@repo-core/shadcn-ui';
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <Button size="icon" variant="outline">
      <i class="i-lucide-settings"></i>
    </Button>
    <Button size="icon" variant="ghost">
      <i class="i-lucide-bell"></i>
    </Button>
    <Button size="icon" variant="default">
      <i class="i-lucide-plus"></i>
    </Button>
  </div>
</template>
