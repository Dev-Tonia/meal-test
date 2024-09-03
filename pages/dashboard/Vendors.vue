<script setup>
import authHeader from "~/services/authHeader";

const config = useRuntimeConfig(); //getting the end point from env

//getting the csv data
const { data } = useAsyncData("csvData", async () => {
  const response = await fetch(
    `${config.public.baseURL}/admin/exports-records/export-vendors`,
    {
      headers: authHeader(),
    }
  );
  const csvData = await response.text();
  return csvData;
});

// // Function to trigger CSV download
const downloadCSV = () => {
  // Create a Blob from the API response data
  const blob = new Blob([data.value], { type: "text/csv" });

  // Create an object URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement("a");

  // Set the href and download attributes for the link
  link.href = url;
  link.download = "vendor.csv";

  // Append the link to the body
  document.body.appendChild(link);

  // Simulate click
  link.click();

  // Remove the link from the body
  document.body.removeChild(link);
};

// fetching the all vendors
const pageNo = ref(1);
const {
  data: vendor,
  pending: isVendor,
  error,
  refresh,
} = useFetch(
  () => `${config.public.baseURL}/admin/users/all/vendor?page=${pageNo.value}`,
  {
    headers: authHeader(),
    key: `vendor-${pageNo.value}`,
  }
);
// getting the vendors data
const allVendor = computed(() => {
  return vendor.value?.data;
});
// for pagination
const pagination = (page) => {
  pageNo.value = page;
  refresh();
};
</script>
9oi8
<template>
  <section class="py-4">
    <PageTitle page-title="Vendors" />

    <div class="flex justify-between py-3">
      <div class="flex space-x-4 basis-[60%]">
        <CustomInput
          class="w-full"
          inputType="text"
          label=""
          `1`
          vfZ`
          placeholder="Search for vendor"
        >
          <Icon name="mi:search" size="24" class="text-gray-400" />
        </CustomInput>
        <BaseButton
          class="text-text-1"
          :btnData="{
            iconName: 'mdi:file-export-outline',
            title: 'Export',
          }"
          @click="downloadCSV"
        />
      </div>
      <BaseButton
        class="text-mt-secondary bg-mt-secondary/25"
        :btnData="{
          iconName: 'mynaui:envelope',
          title: 'Send Broadcast',
        }"
      />
    </div>
    <Transition name="fade">
      <Spinner v-if="isVendor" />
    </Transition>

    <ReusableTable :tableTitles="vendorHeader">
      <TableRow v-for="(data, index) in allVendor" :key="index">
        <TableCheckbox />
        <TableData :data="data.profile?.business_name" />
        <TableData :data="data.email" />
        <TableData :data="data.phone" />
        <TableData :data="data.address" />
        <TableData :data="data.meals_count" />
        <TableData :data="data.is_online === 1 ? 'online' : 'offline'" />
      </TableRow>
    </ReusableTable>
    <div class="py-4">
      <MTPagination
        :total-pages="vendor?.meta?.total"
        :itemsPerPage="vendor?.meta?.per_page"
        @goto="pagination"
        @prev-page="pagination"
        @next-page="pagination"
      />
    </div>
  </section>
</template>
<style scoped></style>
