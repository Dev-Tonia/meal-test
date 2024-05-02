<script setup>
const { showOverlay, closeOverlay } = defineProps([
  "closeOverlay",
  "showOverlay",
]);
</script>
<template>
  <div class="overlay" v-if="showOverlay" @click="closeOverlay">
    <Sidebar class="w-3/4 min-[450px]:w-2/4" />
  </div>
</template>
<style scoped>
.overlay {
  @apply fixed top-0 bottom-0 left-0 right-0 z-40 bg-black bg-opacity-70;
}
</style>
