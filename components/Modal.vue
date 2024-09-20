<template>
  <div
    class="h-screen px-6 sm:px-16  bg-mt-secondary-50 w-screen fixed flex justify-center items-center top-0 left-0 ">
    <slot />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["closeModal"]);
</script>

<style scoped></style>

  <!-- @click.self="$emit('closeModal')" -->
