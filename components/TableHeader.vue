<script lang="ts" setup>
const { tableTitles } = defineProps(["tableTitles"]);
</script>

<template>
  <thead class="bg-mt-secondary-50">
    <tr>
      <th scope="col" class="text-xs px-5 py-3">
        <div class="flex items-center">
          <CustomCheckbox />
          <label for="checkbox-all" class="sr-only">checkbox</label>
        </div>
      </th>

      <th
        scope="col"
        v-for="(title, index) in tableTitles"
        :key="title"
        class="p-4 text-xs text-left font-medium text-[#667085] uppercase lg:p-5"
      >
        {{ title }}
      </th>
    </tr>
  </thead>
</template>

<style scoped></style>
