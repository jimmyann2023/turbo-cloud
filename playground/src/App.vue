<script setup lang="ts">
import { VButton } from '@repo-core/shadcn-ui';

import { AvatarFallback, AvatarImage, AvatarRoot } from 'radix-vue';
</script>

<template>
  <div>
    <VButton type="primary">AAA</VButton>
    <div class="flex gap-5">
      <AvatarRoot
        class="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle"
      >
        <AvatarImage
          alt="Colm Tuite"
          class="h-full w-full rounded-[inherit] object-cover"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        />
        <AvatarFallback
          :delay-ms="600"
          class="text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        >
          CT
        </AvatarFallback>
      </AvatarRoot>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  transition: filter 300ms;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
