<script setup lang="ts">
const items = [
  {
    Date: "06/03/2024",
    OrderID: "#09062022105932",
    RiderID: "#MT-009271",
    PickupTime: "09:24",
    DeliveryTime: "10:10",
    Distance: "10",
    Status: "Ongoing",
  },
  {
    Date: "06/03/2024",
    OrderID: "#09062022105932",
    RiderID: "#MT-009271",
    PickupTime: "09:24",
    DeliveryTime: "10:10",
    Distance: "10",
    Status: "Success",
  },
  {
    Date: "06/03/2024",
    OrderID: "#09062022105932",
    RiderID: "#MT-009271",
    PickupTime: "09:24",
    DeliveryTime: "10:10",
    Distance: "10",
    Status: "Cancelled",
  },
  {
    Date: "06/03/2024",
    OrderID: "#09062022105932",
    RiderID: "#MT-009271",
    PickupTime: "09:24",
    DeliveryTime: "10:10",
    Distance: "10",
    Status: "Ongoing",
  },
];
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
  <ReusableTable :tableData="items" :tableTitles="headers" />
</template>

<style scoped></style>
