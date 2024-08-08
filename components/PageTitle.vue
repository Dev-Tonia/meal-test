<script setup>
const { pageTitle } = defineProps({
  pageTitle: {
    type: String,
  },
});

import { storeToRefs } from "pinia";
const { user } = storeToRefs(useAuthStore());

const currentUser = user;
</script>
<template>
  <div>
    <p class="text-[#165049] font-light">
      Welcome, {{ currentUser?.fullname }}
    </p>
    <h6 class="font-bold text-xl text-[#393939]">{{ pageTitle }}</h6>
  </div>
</template>

<style lang="scss" scoped></style>
