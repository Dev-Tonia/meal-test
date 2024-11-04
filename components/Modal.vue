<template>
  <div
    class="fixed inset-0 z-20 flex items-center justify-center bg-mt-secondary-50"
  >
    <div class="min-h-screen px-6 sm:px-16 py-8 flex items-center">
      <div class="w-full max-h-[90vh] overflow-y-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["closeModal"]);
</script>
