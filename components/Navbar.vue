<script setup lang="ts">
const { openOverlay } = defineProps(["openOverlay"]);
</script>

<template>
  <nav class="px-8 py-3 mb-4 border">
    <div class="flex items-center justify-between">
      <div>
        <div class="flex space-x-5 items-center md:hidden">
          <Icon
            name="ic:baseline-menu"
            class="cursor-pointer"
            size="40"
            @click="openOverlay"
          />
          <NuxtLink to="/" class="block w-10">
            <img src="../assets/imgs/Brand-Logo.png" class="w-full" alt="" />
          </NuxtLink>
        </div>
      </div>
      <div class="flex items-center space-x-2">
        <div
          class="bg-white border w-9 h-9 rounded-full flex items-center justify-center"
        >
          <Icon name="octicon:bell-fill-24" class="text-text-1 text-2xl" />
        </div>
        <div
          class="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden"
        >
          <img src="../assets/imgs/UserAvater.png" class="w-full" />
        </div>
        <div class="text-text-1">
          <span class="font-medium">Admin</span>
          <Icon name="ri:arrow-down-s-line" class="text-2xl" />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
