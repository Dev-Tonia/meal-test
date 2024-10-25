<template>
  <section class="py-4">
    <PageTitle page-title="Customers" />

    <div class="flex justify-between py-3">
      <div class="flex space-x-4 basis-[60%]">
        <CustomInput
          class="w-full"
          inputType="text"
          label=""
          placeholder="Search for customer"
        >
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
        <TableData
          :data="user.delivery_address ? user.delivery_address.address : 'N/A'"
        />
        <TableData
          :data="user.orders_completed ? user.orders_completed : 'N/A'"
        />
      </TableRow>
    </ReusableTable>
    <MTPagination
      :total-pages="data.meta?.total"
      :itemsPerPage="data.meta?.per_page"
      @goto="gotoPage"
      @prev-page="prevPage"
      @next-page="nextPage"
    />
  </section>
</template>

<script setup>
import authHeader from "~/services/authHeader";

const pageNo = ref(1);

const config = useRuntimeConfig();

const { data, pending, error, refresh } = useFetch(
  () =>
    `${config.public.baseURL}/admin/users/all/customer?page=${pageNo.value}`,
  {
    headers: authHeader(),
    key: `customer-${pageNo.value}`,
  },
);
const usersData = computed(() => {
  return data?.value.data;
});
const nextPage = (page) => {
  pageNo.value = page;
  refresh();
};

const gotoPage = (page) => {
  pageNo.value = page;
  refresh();
};
const prevPage = (page) => {
  pageNo.value = page;
  refresh();
};
</script>
