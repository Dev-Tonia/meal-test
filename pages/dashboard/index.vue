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
  data: txn,
  pending: txnErr,
  error: isTxn,
} = useApiCall("/admin/payments", {
  headers: authHeader(),
});

const satOverview = computed(() => {
  return overview.value.data;
});
const txnData = computed(() => {
  return txn.value.data.data;
});
console.log(satOverview);
const headers = [
  "Date",
  "Order ID",
  "Rider ID",
  "Pickup time",
  "Delivery time",
  "Distance (KM)",
  "Status",
];
</script>

<template>
  <pre>
    {{ txnData }}
  </pre>
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
    <div class="font-bold text-[#393939] p-5">Transactions</div>
    <ReusableTable :tableTitles="headers">
      <TableRow v-for="(data, index) in txnData" :key="index">
        <TableCheckbox />
        <TableData :data="data.created_at" />
        <TableData :data="data.user_id" />
        <TableData :data="data.amount" />
        <TableData :data="data.reference" />
        <TableData data="60000" />
        <TableData data="800000000" />
        <TableData :data="data.status" />
      </TableRow>
    </ReusableTable>
  </div>
</template>
