<script setup lang="ts">
const { tableTitles } = defineProps(["tableTitles"]);
</script>
<template>
  <div class="overflow-x-auto rounded border what">
    <div class="inline-block min-w-full align-middle">
      <div class="overflow-hidden shadow">
        <table class="min-w-full divide-y divide-gray-200 table-fixed">
          <TableHeader :table-titles="tableTitles" />
          <!-- <TableBody :table-data="tableData" /> -->
          <tbody class="bg-white divide-y divide-gray-200">
            <!-- Table is expected Which has it's component -->
            <slot></slot>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>
.what::-webkit-scrollbar {
  width: 5px;
}
</style>
