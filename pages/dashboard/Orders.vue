<template>
  <section class="py-4">
    <PageTitle page-title="Orders" />

    <div class="flex justify-between py-3">
      <div class="flex space-x-4 basis-[60%]">
        <CustomInput
          class="w-full"
          inputType="text"
          label=""
          placeholder="Search for orders"
        >
          <Icon name="mi:search" size="24" class="text-gray-400" />
        </CustomInput>
      </div>
    </div>
    <Transition name="fade">
      <Spinner v-if="pending" />
    </Transition>
    <ReusableTable :table-titles="orderHeader">
      <TableRow v-for="(order, index) in ordersData?.data" :key="index">
        <TableCheckbox />
        <TableData :data="formatDate(order.order_date)" />
        <TableData :data="order.order_number" />
        <TableData :data="order.rider_name ? order.rider_name : 'N/A'" />
        <TableData
          :data="
            order.dispatched_at ? formatTime(order.dispatched_at) : '--:--'
          "
        />
        <TableData
          :data="order.completed_at ? formatTime(order.completed_at) : '--:--'"
        />
        <TableData :data="order.distance ? order.distance : '00(KM)'" />
        <TableData :data="order.status ? order.status : 'N/A'" />
        <TableData :data="order.action ? order.action : 'N/A'" />
      </TableRow>
    </ReusableTable>
    <MTPagination
      :total-pages="ordersData?.meta?.total"
      :itemsPerPage="ordersData?.meta?.per_page"
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
  () => `${config.public.baseURL}/admin/orders/all?page=${pageNo.value}`,
  {
    headers: authHeader(),
    key: `orders-${pageNo.value}`,
  }
);

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

const ordersData = computed(() => {
  return data?.value?.data;
});
</script>

<style scoped></style>
