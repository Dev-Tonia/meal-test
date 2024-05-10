<template>
  <div>
    <ReusableTable :table-titles="customerHeader">
      <TableRow v-for="(user, index) in usersData" :key="index">
        <TableCheckbox />
        <TableData :data="user.fullname" />
        <TableData :data="user.email" />
        <TableData :data="user.phone ? user.phone : 'N/A'" />
        <TableData :data="user.delivery_address ? user.delivery_address : 'N/A'" />
        <TableData :data="user.orders_completed ? user.orders_completed : 'N/A'" />
      </TableRow>
    </ReusableTable>
  </div>
</template>

<script setup>
import authHeader from "~/services/authHeader";

const { data, pending, error } = await useApiCall("/admin/users/all", {
  headers: authHeader(),
});

const usersData = computed(() => {
  return data.value.data
});


onMounted(() => {
  console.log(usersData.value)
  // console.log(data.value.data)
})

</script>
