<template>
  <section class="py-4">
    <PageTitle page-title="Payouts" />

    <div class="flex justify-between py-3">
      <div class="flex space-x-4 basis-[60%]">
        <CustomInput
          class="w-full"
          inputType="text"
          label=""
          placeholder="Search...."
        >
          <Icon name="mi:search" size="24" class="text-gray-400" />
        </CustomInput>
      </div>
    </div>
    <Transition name="fade">
      <Spinner v-if="pending" />
    </Transition>
    <ReusableTable :table-titles="paymentHeader">
      <TableRow v-for="(payment, index) in allPayments" :key="index">
        <TableCheckbox />
        <TableData :data="payment.name" />
        <TableData :data="payment.reference" />
        <TableData :data="payment.amount" />
        <TableData
          :data="payment.delivery_address ? payment.delivery_address : 'N/A'"
        />
        <TableData
          :data="payment.orders_completed ? payment.orders_completed : 'N/A'"
        />
      </TableRow>
    </ReusableTable>
  </section>
</template>

<script setup>
import authHeader from "~/services/authHeader";

const { data, pending, error } = await useApiCall("/admin/payments", {
  headers: authHeader(),
});

const allPayments = computed(() => {
  return data.value.data.data;
});
</script>

<style scoped></style>
