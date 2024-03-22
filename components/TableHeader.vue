<script lang="ts" setup>
const headers = [
  "Date",
  "Order ID",
  "Rider ID",
  "Pickup time",
  "Delivery time",
  "Distance (KM)",
  "Status",
];
</script>

<template>
  <thead class="bg-secondary-50">
    <tr>
      <th scope="col" class="text-xs px-5 py-3">
        <div class="flex items-center">
          <CustomCheckbox />
          <label for="checkbox-all" class="sr-only">checkbox</label>
        </div>
      </th>

      <th
        scope="col"
        v-for="(header, index) in headers"
        :key="header"
        class="p-4 text-xs font-medium text-left text-[#667085] uppercase lg:p-5"
      >
        {{ header }}
      </th>
    </tr>
  </thead>
</template>

<style scoped></style>
