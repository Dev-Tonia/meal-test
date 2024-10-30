<template>
  <div>
    <button @click="isOpen = true">Open Modal</button>
  </div>
  <!-- <CustomModal :is-open="isOpen" title="Messages" @close="isOpen = false"></CustomModal> -->
</template>

<script setup lang="ts">
const isOpen = ref(false);
// const closeModal = () => {
//   isOpen.value = false;
// };
</script>

<style lang="scss" scoped></style>
