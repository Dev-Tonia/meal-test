<script setup lang="ts">
const { tableData } = defineProps(["tableData"]);
</script>

<template>
  <tbody class="bg-white divide-y divide-gray-200">
    <tr
      class="hover:bg-gray-100"
      v-for="(data, index) in tableData"
      :key="data.OrderID"
    >
      <td class="py-3 w-4 px-5">
        <div class="flex items-center">
          <CustomCheckbox />
          <label for="checkbox-1" class="sr-only">checkbox</label>
        </div>
      </td>
      <TableData :data="data" />
    </tr>
  </tbody>
</template>

<style scoped></style>
