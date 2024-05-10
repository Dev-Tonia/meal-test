<template>
  <ReusableTable :table-titles="paymentHeader">
    <TableRow v-for="(user, index) in usersData" :key="index">
      <TableCheckbox />
      <TableData :data="user.fullname" />
      <TableData :data="user.email" />
      <TableData :data="user.phone ? user.phone : 'N/A'" />
      <TableData :data="user.delivery_address ? user.delivery_address : 'N/A'" />
      <TableData :data="user.orders_completed ? user.orders_completed : 'N/A'" />
    </TableRow>
  </ReusableTable>
</template>

<script setup >
import authHeader from "~/services/authHeader";

const { data, pending, error } = await useApiCall("/admin/payments", {
  headers: authHeader(),
});

const allPayments = computed(() => {
  return data.value.data.data
});


onMounted(() => {
  console.log(allPayments.value)
})
</script>

<style scoped></style>
