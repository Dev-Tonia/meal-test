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
    <ReusableTable :table-titles="customerHeader">
      <TableRow v-for="(user, index) in usersData" :key="index">
        <TableCheckbox />
        <TableData :data="user.fullname" />
        <TableData :data="user.email" />
        <TableData :data="user.phone ? user.phone : 'N/A'" />
        <TableData
          :data="user.delivery_address ? user.delivery_address : 'N/A'"
        />
        <TableData
          :data="user.orders_completed ? user.orders_completed : 'N/A'"
        />
      </TableRow>
    </ReusableTable>
  </section>
</template>

<script setup>
import authHeader from "~/services/authHeader";

const { data, pending, error } = await useApiCall("/admin/users/all", {
  headers: authHeader(),
});

const usersData = computed(() => {
  return data.value.data;
});
</script>
