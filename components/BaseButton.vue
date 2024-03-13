<script setup lang="ts">
const { btnData } = defineProps(["btnData"]);
</script>
<template>
  <button
    class="px-4 py-2.5 bg-white border border-[#D0D5DD] rounded-lg shadow shadow-[#1018280D]"
  >
    <div class="flex gap-2 items-center">
      <Icon :name="btnData.iconName" :color="btnData.iconColor" size="30" />
      <span> {{ btnData.title }} </span>
    </div>
  </button>
</template>
