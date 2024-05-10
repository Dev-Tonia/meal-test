<script setup>
import authHeader from "~/services/authHeader";

const {
  data: overview,
  pending: overviewErr,
  error: isOverview,
} = useApiCall("/admin/dashboard/overview", {
  headers: authHeader(),
});
const {
  data: orders,
  pending: ordersErr,
  error: isOrders,
} = useApiCall("/admin/orders/all", {
  headers: authHeader(),
});

const satOverview = computed(() => {
  return overview.value?.data;
});
const ordersData = computed(() => {
  return orders.value?.data.data;
});

const headers = [
  "Date",
  "Order ID",
  "Rider ID",
  "Pickup time",
  "Delivery time",
  "Distance (KM)",
  "Status",
];

// formatting the date
const dateAndTime = computed(() => {
  const pattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{6}Z$/;
  return ordersData.value.map((price) => {
    if (pattern.test(price.order_date)) {
      let date = price.order_date.slice(0, 10);
      let time = price.order_date.slice(12, 19);
      return `${date}:${time}`;
    }
  });
});
</script>

<template>
  <div class="flex flex-wrap justify-between items-center py-4">
    <div>
      <p class="text-[#165049] font-light">Welcome, Favour</p>
      <h6 class="font-bold text-xl text-[#393939]">Admin Dashboard</h6>
    </div>
    <BaseButton
      class="bg-text-1 text-white"
      :btnData="{
        iconName: 'ic:round-add',
        title: 'Add Admin',
      }"
    />
  </div>

  <div class="flex gap-5">
    <Cards-Card :positive="false">
      <template #title>customers</template>
      <template #price>{{ satOverview.customers_count }}</template>
      <template #statNumber>36</template>
    </Cards-Card>
    <Cards-Card variant="secondary">
      <template #title>Vendors</template>
      <template #price>{{ satOverview.vendors_count }}</template>
      <template #statNumber>36</template>
    </Cards-Card>
    <Cards-Card :positive="false">
      <template #title>riders</template>
      <template #price>{{ satOverview.riders_count }}</template>
      <template #statNumber>8</template>
    </Cards-Card>
  </div>
  <div class="flex flex-col my-6 rounded shadow-xl shadow-gray-200">
    <div class="font-bold text-[#393939] p-5">Recent Orders</div>

    <ReusableTable :tableTitles="headers">
      <TableRow v-for="(data, index) in ordersData" :key="index">
        <TableCheckbox />
        <TableData :data="dateAndTime[index]" />
        <TableData :data="data.id" />
        <TableData :data="data.amount" />
        <TableData :data="data.reference" />
        <TableData data="60000" />
        <TableData data="800000000" />
        <TableData :data="data.status" class="text-center" />
      </TableRow>
    </ReusableTable>
  </div>
</template>
