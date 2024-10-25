<template>
  <section class="py-4">
    <PageTitle page-title="Customers" />

    <div class="flex justify-between py-3">
      <div class="flex space-x-4 basis-[60%]">
        <CustomInput class="w-full" inputType="text" label="" placeholder="Search for customer" v-model="search">
          <Icon name="mi:search" size="24" class="text-gray-400" />
        </CustomInput>
      </div>
    </div>
    <Transition name="fade">
      <Spinner v-if="pending" />
    </Transition>
    <ReusableTable :table-titles="customerHeader">
      <TableRow v-for="(user, index) in usersData" :key="index">
        <TableCheckbox />
        <TableData :data="user.fullname" />
        <TableData :data="user.email" />
        <TableData :data="user.phone ? user.phone : 'N/A'" />
        <TableData :data="user.delivery_address ? user.delivery_address.address : 'N/A'" />
        <TableData :data="user.orders_completed ? user.orders_completed : 'N/A'" />
      </TableRow>
    </ReusableTable>
    <MTPagination :total-pages="data.meta?.total" :itemsPerPage="data.meta?.per_page" @goto="pagination"
      @prev-page="pagination" @next-page="pagination" />
  </section>
</template>

<script setup>
import authHeader from "~/services/authHeader";

const config = useRuntimeConfig();

// customer fetching and searching
const pageNo = ref(1);
const search = ref("");
const debouncedSearch = ref("");

const url = computed(() => {
  if (debouncedSearch.value) {
    return `${config.public.baseURL}/admin/search/customer/${encodeURIComponent(
      debouncedSearch.value
    )}?page=${pageNo.value}`;
  } else {
    return `${config.public.baseURL}/admin/users/all/customer?page=${pageNo.value}`;
  }
});

const fetchKey = computed(
  () => `customer-${debouncedSearch.value || ""}-${pageNo.value}`
);

const { data, pending, error, refresh } = useFetch(url, {
  headers: authHeader(),
  key: fetchKey.value,
});

// Debounce search input
let debounceTimer;
watch(search, (newValue) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    debouncedSearch.value = newValue;
    pageNo.value = 1; // Reset to first page on new search
  }, 1000); // 1000ms debounce
});

const usersData = computed(() => {
  return data?.value.data;
});

const pagination = (page) => {
  pageNo.value = page;
};
</script>
