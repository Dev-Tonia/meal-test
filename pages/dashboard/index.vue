<script setup>
import { overviewHeaders } from "~/composables/data";
import authHeader from "~/services/authHeader";

const {
  data: overview,
  pending: isOverview,
  error: overviewErr,
} = useApiCall("/admin/dashboard/overview", {
  headers: authHeader(),
});
const {
  data: orders,
  pending: isOrders,
  error: ordersErr,
} = useApiCall("/admin/orders/all", {
  headers: authHeader(),
});
console.log(overview.value);
const satOverview = computed(() => {
  return overview.value?.data;
});
const ordersData = computed(() => {
  return orders.value?.data.data;
});

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
    <PageTitle page-title="Admin Dashboard" />

    <BaseButton
      class="bg-text-1 text-white"
      :btnData="{
        iconName: 'ic:round-add',
        title: 'Add Admin',
      }"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <Cards-Card :positive="false">
      <template #title>Today Sales</template>
      <template #price>{{ satOverview?.today_sales }}</template>
      <template #statNumber>36</template>
    </Cards-Card>
    <Cards-Card variant="secondary">
      <template #title>Total Sales</template>
      <template #price>{{ satOverview?.total_sales }}</template>
      <template #statNumber>36</template>
    </Cards-Card>
    <Cards-Card :positive="false">
      <template #title>Total Orders</template>
      <template #price>{{ satOverview?.orders_count }}</template>
      <template #statNumber>8</template>
    </Cards-Card>
    <Cards-Card :positive="false">
      <template #title>customers</template>
      <template #price>{{ satOverview?.customers_count }}</template>
      <template #statNumber>36</template>
    </Cards-Card>
    <Cards-Card variant="secondary">
      <template #title>Vendors</template>
      <template #price>{{ satOverview?.vendors_count }}</template>
      <template #statNumber>36</template>
    </Cards-Card>
    <Cards-Card :positive="false">
      <template #title>riders</template>
      <template #price>{{ satOverview?.riders_count }}</template>
      <template #statNumber>8</template>
    </Cards-Card>
  </div>

  <div class="flex flex-col my-6 rounded shadow-xl shadow-gray-200">
    <div class="font-bold text-[#393939] p-5">Recent Orders</div>

    <ReusableTable :tableTitles="overviewHeaders">
      <TableRow v-for="(data, index) in ordersData" :key="index">
        <TableCheckbox />
        <TableData :data="dateAndTime[index]" />
        <TableData :data="data.order_number" />
        <TableData :data="data.rider_name ? data.rider_name : 'N/A'" />
        <TableData
          :data="data.dispatched_at ? formatTime(data.dispatched_at) : '--:--'"
        />
        <TableData
          :data="data.completed_at ? formatTime(data.completed_at) : '--:--'"
        />
        <TableData :data="data.distance ? data.distance : '00(KM)'" />
        <TableData :data="data.status ? data.status : 'N/A'" />
      </TableRow>
    </ReusableTable>
  </div>

  <Transition name="fade">
    <Spinner v-if="isOverview || isOrders" />
  </Transition>
</template>
