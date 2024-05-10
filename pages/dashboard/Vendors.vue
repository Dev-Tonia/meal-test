<script setup lang="ts">
import authHeader from "~/services/authHeader";

const {
  data: vendor,
  pending: vendorErr,
  error: isVendor,
} = useApiCall("/admin/users/all/vendor?page=1", {
  headers: authHeader(),
});

const headers = [
  "Name",
  "Email",
  "Phone",
  "Location",
  "Orders Complete",
  "Available",
];
const text = ref(
  "Just beside District 4 ,close to immigration Head office,Kashim Ibrahim road.Makurdi"
);

const allVendor = computed(() => {
  return vendor.value?.data;
});
</script>

<template>
  <div>
    <p class="text-[#165049] font-light">Welcome, Favour</p>
    <h6 class="font-bold text-xl text-[#393939]">Vendors</h6>
  </div>
  <div class="flex justify-between py-3">
    <div class="flex space-x-4 basis-[60%]">
      <CustomInput
        class="w-full"
        inputType="text"
        label=""
        placeholder="Search for products"
      >
        <Icon name="mi:search" size="24" class="text-gray-400" />
      </CustomInput>
      <BaseButton
        class="text-text-1"
        :btnData="{
          iconName: 'bi:filter',
          title: 'Filters',
        }"
      />
    </div>
    <BaseButton
      class="text-mt-secondary"
      :btnData="{
        iconName: 'mynaui:envelope',
        title: 'Send Broadcast',
      }"
    />
  </div>
  <ReusableTable v-if="isVendor">
    <TableRow> <TableData>loading </TableData> </TableRow>
  </ReusableTable>
  <ReusableTable v-else :tableTitles="headers">
    <TableRow v-for="(data, index) in allVendor" :key="index">
      <TableCheckbox />
      <TableData :data="data.profile.business_name" />
      <TableData :data="data.email" />
      <TableData :data="data.phone" />
      <TableData :data="data.address" />
      <TableData :data="data.meals_count" />
      <TableData :data="data.is_online === 1 ? 'online' : 'offline'" />
    </TableRow>
  </ReusableTable>
  <div class="py-4">
    <MTPagination />
  </div>
</template>
<style scoped></style>
