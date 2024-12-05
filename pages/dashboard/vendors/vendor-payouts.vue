<template>
  <section
    class="bg-[#E8EEED] px-5 min-h-screen py-10 flex items-center justify-center"
  >
    <div class="w-full">
      <div class="bg-white rounded-xl max-w-5xl mx-auto">
        <!-- Header -->
        <div class="p-5">
          <div class="flex justify-end items-center mb-3">
            <button
              class="text-gray-600 hover:text-gray-700 bg-gray-200 rounded-full p-2"
              @click="goBack"
            >
              <Icon name="mdi:close" class="w-6 h-6" />
            </button>
          </div>
          <h1 class="font-bold text-[#393939] text-2xl">
            Vendor Payout History
          </h1>
        </div>

        <!-- Loading State -->
        <Transition name="fade">
          <div v-if="isVendorPayouts">
            <Spinner />
          </div>
        </Transition>

        <!-- Table data -->
        <div v-if="!isVendorPayouts">
          <div
            v-if="allVendorPayouts?.length === 0"
            class="text-xl text-center py-9"
          >
            No Payout History for this vendor
          </div>
          <ReusableTable v-else :tableTitles="vendorPayoutsHeader">
            <TableRow v-for="(data, index) in allVendorPayouts" :key="index">
              <TableCheckbox />
              <TableData :data="data.vendor.fullname" />
              <TableData :data="data.vendor.transfer_code" />
              <TableData :data="data.total_vendor_settlement" />
              <TableData :data="formatDate(data.created_at)" />
              <TableData :data="formatTime(data.created_at)" />
              <TableData :data="data.status" />
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: false,
});
import { vendorPayoutsHeader } from "~/composables/data";
import authHeader from "~/services/authHeader";

const config = useRuntimeConfig();

const route = useRoute();
const router = useRouter();

// implementing moving back to the previous page
const goBack = () => {
  router.back();
};

// Get the vendor ID from query
const vendorId = computed(() => route.query.value);
// fetching the data
const {
  data: vendorPayouts,
  pending: isVendorPayouts,
  error,
  refresh,
} = useFetch(
  `${config.public.baseURL}/admin/vendors-payouts/view/${vendorId.value}`,
  {
    headers: authHeader(),
  }
);

// destructing the data from the api call
const allVendorPayouts = computed(() => vendorPayouts.value?.data.data);
</script>

<style lang="scss" scoped></style>
