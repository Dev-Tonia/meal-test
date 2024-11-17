<script setup>
const { toggleModal, getSelectedAdminUser } = useGlobalStore();

const { openModal } = storeToRefs(useGlobalStore());

import authHeader from "~/services/authHeader";

const config = useRuntimeConfig();

// CSV download functionality (unchanged)
const { data: csvData } = useAsyncData("csvData", async () => {
  const response = await fetch(
    `${config.public.baseURL}/admin/exports-records/export-vendors`,
    { headers: authHeader() }
  );
  return response.text();
});

// export this downloadCSV function
const downloadCSV = () => {
  const blob = new Blob([csvData.value], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "vendor.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Vendor fetching and searching
const pageNo = ref(1);
const search = ref("");
const debouncedSearch = ref("");

// get the url for the api call
const url = computed(() => {
  if (debouncedSearch.value) {
    return `${config.public.baseURL}/admin/search/vendor/${encodeURIComponent(
      debouncedSearch.value
    )}?page=${pageNo.value}`;
  } else {
    return `${config.public.baseURL}/admin/vendors?page=${pageNo.value}`;
  }
});

// setting the fetch key to be dynamic based on the search value
const fetchKey = computed(
  () => `vendor-${debouncedSearch.value || ""}-${pageNo.value}`
);

const {
  data: vendor,
  pending: isVendor,
  error,
  refresh,
} = useFetch(url, {
  headers: authHeader(),
  key: fetchKey.value,
});

// Debounce search input
let debounceTimer;
watch(search, (newValue) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    debouncedSearch.value = newValue;
    pageNo.value = 1; // Reset to first page on new search
  }, 1000); // 300ms debounce
});

const allVendor = computed(() => vendor.value?.data);

const pagination = (page) => {
  pageNo.value = page;
};

// vendor details and modal
const selectedVendorId = ref(null);
const showVendorModal = ref(false);

const handleViewMore = (vendorId) => {
  selectedVendorId.value = vendorId;
  showVendorModal.value = true;
  toggleModal();
};
</script>

<template>
  <section class="py-4">
    <PageTitle page-title="Vendors" />

    <ScreensSendBroadCast :isOpen="isOpen" @closeModal="isOpen = false" />

    <div class="flex justify-between py-3">
      <div class="flex space-x-4 basis-[60%]">
        <CustomInput
          class="w-full"
          inputType="text"
          label=""
          placeholder="Search for vendor"
          v-model="search"
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
        @click="openModal"
        :btnData="{
          iconName: 'mynaui:envelope',
          title: 'Send Broadcast',
        }"
      />
    </div>

    <Transition name="fade">
      <Spinner v-if="isVendor" />
    </Transition>
    <!-- vendor table data -->
    <ReusableTable :tableTitles="vendorHeader">
      <TableRow v-for="(data, index) in allVendor?.data" :key="index">
        <TableCheckbox />
        <TableData :data="data.profile?.business_name" />
        <TableData :data="data.email" />
        <TableData :data="data.phone" />
        <TableData :data="data.address" />
        <TableData :data="data.meals_count" />
        <TableData :data="data.is_online === 1 ? 'online' : 'offline'" />
        <TableData :data="data.profile.rating" />

        <TableData>
          <button
            @click="handleViewMore(data.id)"
            class="border rounded-3xl py-0.5 px-2.5 border-[#E9EBF8] w-fit text-sm flex items-center justify-center"
          >
            view more
          </button>
        </TableData>
      </TableRow>
    </ReusableTable>

    <div class="py-4" v-if="!debouncedSearch">
      <MTPagination
        :total-pages="vendor?.data?.meta?.total"
        :itemsPerPage="vendor?.data?.meta?.per_page"
        @goto="pagination"
        @prev-page="pagination"
        @next-page="pagination"
      />
    </div>
  </section>

  <Modal v-if="openModal">
    <VendorDetails :vendorId="selectedVendorId" />
  </Modal>
</template>
