<script setup lang="ts">
import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev
} from "@/components/ui/pagination";
import { ChevronLeft } from 'lucide-vue-next';


import { Button } from "@/components/ui/button";
const props = defineProps({
  totalPages: Number,
  currentPage: Number,
  itemsperPage: Number
});

</script>

<template>
  <Pagination v-slot="{ page }" :total="totalPages" class="my-10 " :items-per-page="itemsperPage" :sibling-count="1"
    show-edges :default-page="1">
    <PaginationList v-slot="{ items }" class="flex items-center px-4 md:px-10 justify-between gap-1">
      <!-- <PaginationFirst /> -->
      <PaginationPrev @click="$emit('prev-page', page - 1)"
        class=" text-mt-secondary border-2 px-10 font-semibold border-mt-secondary-50 rounded-[6px]">
        <span>Previous</span>
      </PaginationPrev>

      <div class="flex items-center gap-2">
        <template v-for="(item, index) in items">
          <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
            <Button class="w-10 h-10 text-gray-600 font-medium p-0"
              :class="{ 'bg-mt-secondary-50 font-medium text-mt-secondary rounded-full': item.value === page }"
              @click="$emit('goto', item.value)">
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>
      </div>

      <PaginationNext @click="$emit('next-page', page + 1)"
        class=" text-mt-secondary border-2 px-10 font-semibold border-mt-secondary-50 rounded-[6px]">
        <ChevronLeft class="h-6 w-6" />
        <div>Next</div>
      </PaginationNext>
      <!-- <PaginationLast /> -->
    </PaginationList>
  </Pagination>
</template>

<style scoped></style>
