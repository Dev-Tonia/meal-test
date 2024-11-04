<template>
  <div class="flex items-center gap-2">
    <p class="text-sm font-semibold">{{ title }}</p>
    <p class="text-sm text-gray-600">{{ detail }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  detail: String,
});
</script>

<style scoped></style>
