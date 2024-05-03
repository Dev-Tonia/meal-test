<script setup lang="ts">
const items = [
  {
    Name: "Ujah Emmanuel",
    Email: "ujahemmanuel72@gmail.com",
    Phone: "08169192646",
    Location: "Larmier Commercial Complex",
    NoOfRiders: "35",
    NoOfDeliveries: "35",
    Status: "Active",
  },
  {
    Name: "Ujah Emmanuel",
    Email: "ujahemmanuel72@gmail.com",
    Phone: "08169192646",
    Location: "Larmier Commercial Complex",
    NoOfRiders: "35",
    NoOfDeliveries: "35",
    Status: "Unavailable",
  },
  {
    Name: "Ujah Emmanuel",
    Email: "ujahemmanuel72@gmail.com",
    Phone: "08169192646",
    Location: "Larmier Commercial Complex",
    NoOfRiders: "35",
    NoOfDeliveries: "35",
    Status: "Unavailable",
  },
  {
    Name: "Ujah Emmanuel",
    Email: "ujahemmanuel72@gmail.com",
    Phone: "08169192646",
    Location: "Larmier Commercial Complex",
    NoOfRiders: "35",
    NoOfDeliveries: "35",
    Status: "Active",
  },
];
const headers = [
  "Name",
  "Email",
  "Phone",
  "Location",
  "No of Riders",
  "No of Deliveries",
  "Status",
];
</script>

<template>
  <ReusableTable :tableData="vendorData" :tableTitles="vendorHeader" />
</template>

<style scoped></style>
