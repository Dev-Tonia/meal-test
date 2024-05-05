<script setup lang="ts">
import { useCustomFetch } from "../../composables/fetch.js";

const {
  result: overview,
  error,
  isLoading,
} = useCustomFetch("/admin/dashboard/overview");
// const { data } = overview;
</script>

<template>
  <div class="flex justify-between items-center py-4">
    {{ error }}
    {{ overview }}
    <div>
      <p class="text-[#165049] font-light">Welcome, Favour</p>
      <h6 class="font-bold text-xl text-[#393939]">Admin Dashboard</h6>
    </div>
    <BaseButton
      class="bg-text-1 text-white"
      :btnData="{
        iconName: 'ic:round-add',
        title: 'Add Admin',
      }"
    />
  </div>
  <div class="flex gap-5">
    <Cards-Card :positive="false">
      <template #title>customers</template>
      <template #price>{{ overview.customers_count }}</template>
      <template #statNumber>36</template>
    </Cards-Card>
    <Cards-Card variant="secondary">
      <template #title>Vendors</template>
      <template #price>{{ overview.vendors_count }}</template>
      <template #statNumber>36</template>
    </Cards-Card>
    <Cards-Card :positive="false">
      <template #title>riders</template>
      <template #price>{{ overview.riders_count }}</template>
      <template #statNumber>8</template>
    </Cards-Card>
  </div>
</template>
