<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo-core/ui-kit/shadcn-ui';
</script>

<template>
  <div class="flex flex-col gap-4">
    <!-- 基础用法 -->
    <div>
      <h3 class="mb-4 text-lg font-medium">基础用法</h3>
      <div class="flex items-center gap-4">
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  </div>
</template>
