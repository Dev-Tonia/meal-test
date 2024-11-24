<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-20 flex items-center justify-center bg-mt-secondary-50"
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :visible="{ opacity: 1, scale: 1 }"
    >
      <div class="min-h-screen px-6 sm:px-16 py-8 flex items-center">
        <div class="w-full max-h-[90vh] overflow-y-auto">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
// const emit = defineEmits(["closeModal"]);
</script>
