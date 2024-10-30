<script setup>
const { pageTitle } = defineProps({
  pageTitle: {
    type: String,
  },
});

import { storeToRefs } from "pinia";
const { currentUser } = storeToRefs(useAuthStore());
</script>
<template>
  <div>
    <p class="text-[#165049] font-light">
      Welcome, {{ currentUser?.firstname }}
    </p>
    <h6 class="font-bold text-xl text-[#393939]">{{ pageTitle }}</h6>
  </div>
</template>

<style lang="scss" scoped></style>
