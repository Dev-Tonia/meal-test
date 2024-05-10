<template>
  <div>
    <ReusableTable :table-titles="vendorHeader">
      <TableRow v-for="(order, index) in ordersData" :key="index">
        <TableCheckbox />
        <TableData :data="formatDate(order.order_date)" />
        <TableData :data="order.id" />
        <TableData :data="order.rider_id ? order.rider_id : 'N/A'" />
        <TableData :data="order.pickup_time ? order.pickup_time : '--:--'" />
        <TableData :data = "order.delivery_time ? order.delivery_time : '--:--'"/>
        <TableData :data="order.distance ? order.distance : '00(KM)'" />
        <TableData :data="order.status ? order.status : 'N/A'" />
        <TableData :data="order.action ? order.action : 'N/A'" />
      </TableRow>
    </ReusableTable>
  </div>
</template>

<script setup >
import authHeader from "~/services/authHeader";

const { data: orders, pending, error } = await useApiCall("/admin/orders/all", {
  headers: authHeader(),
});

const ordersData = computed(() => {
  // console.log(orders.value)
  return orders.value.data.data
});




</script>

<style scoped></style>