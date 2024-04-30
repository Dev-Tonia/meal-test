<script setup lang="ts">
const { tableData, tableTitles } = defineProps(["tableData", "tableTitles"]);
</script>
<template>
  <div class="flex flex-col my-6 mx-4 rounded shadow-xl shadow-gray-200">
    <div class="overflow-x-auto rounded border what">
      <div class="font-bold text-[#393939] p-5">Transactions</div>
      <div class="inline-block min-w-full align-middle">
        <div class="overflow-hidden shadow">
          <table class="min-w-full divide-y divide-gray-200 table-fixed">
            <TableHeader :table-titles="tableTitles" />
            <TableBody :table-data="tableData" />
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.what::-webkit-scrollbar {
  width: 5px;
}
</style>
