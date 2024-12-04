<template>
  <div class="bg-white shadow-lg p-4 rounded-lg">
    <p class="text-xs uppercase text-gray-500 font-aileron mb-1">
      {{ title }}
    </p>
    <p class="text-2xl font-bold text-mt-secondary">
      {{ detail }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  detail: String,
  title: String,
});
</script>

<style scoped></style>
