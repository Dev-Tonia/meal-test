<script setup lang="ts">
const items = [
  {
    Date: "06/03/2024",
    "Order-ID": "#09062022105932",
    "Rider-ID": "#MT-009271",
    "Pickup-time": "09:24",
    "Delivery-time": "10:10",
    Distance: "10",
    Status: "Ongoing",
  },
  {
    Date: "06/03/2024",
    "Order-ID": "#09062022105932",
    "Rider-ID": "#MT-009271",
    "Pickup-time": "09:24",
    "Delivery-time": "10:10",
    Distance: "10",
    Status: "Success",
  },
  {
    Date: "06/03/2024",
    "Order-ID": "#09062022105932",
    "Rider-ID": "#MT-009271",
    "Pickup-time": "09:24",
    "Delivery-time": "10:10",
    Distance: "10",
    Status: "Cancelled",
  },
  {
    Date: "06/03/2024",
    "Order-ID": "#09062022105932",
    "Rider-ID": "#MT-009271",
    "Pickup-time": "09:24",
    "Delivery-time": "10:10",
    Distance: "10",
    Status: "Ongoing",
  },
];
</script>

<template>
  <tbody class="bg-white divide-y divide-gray-200">
    <tr
      class="hover:bg-gray-100"
      v-for="(item, index) in items"
      :key="item['Order-ID']"
    >
      <td class="py-3 w-4 px-5">
        <div class="flex items-center">
          <CustomCheckbox />
          <label for="checkbox-1" class="sr-only">checkbox</label>
        </div>
      </td>

      <td
        class="py-3 text-sm font-medium text-gray-900 whitespace-nowrap px-5"
        :class="{
          'text-primary': value == 'Ongoing',
          'text-[#4CAF50]': value == 'Success',
          'text-[#CE3131]': value == 'Cancelled',
        }"
        v-for="(value, key) in item"
        :key="key"
      >
        {{ value }}
      </td>
    </tr>
  </tbody>
</template>

<style scoped></style>
