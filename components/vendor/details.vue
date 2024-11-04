<template>
  <div v-if="isVendorDetail">
    <!-- Loading State -->
    <div
      v-if="isLoading"
      class="relative w-full max-w-2xl m-4 p-6 rounded-2xl bg-white shadow-lg"
    >
      <Spinner />
    </div>

    <!-- Error State -->
    <div
      v-else-if="error"
      class="relative w-full max-w-2xl m-4 p-6 rounded-2xl bg-white shadow-lg"
    >
      <p class="text-red-500">
        Error loading vendor details. Please try again.
      </p>
    </div>

    <!-- Content when data is loaded -->
    <div
      v-else-if="vendor"
      class="relative w-full max-w-2xl m-4 rounded-2xl bg-white shadow-lg"
    >
      <!-- Header -->
      <div class="p-6 border-b sticky top-0 bg-white z-10 rounded-t-2xl">
        <div class="flex justify-end items-center mb-3">
          <button
            class="text-gray-600 hover:text-gray-700 bg-gray-200 rounded-full p-2"
            @click="closeModal"
          >
            <Icon name="mdi:close" class="w-6 h-6" />
          </button>
        </div>
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-mt-secondary text-center">
            Vendor details
          </h2>
        </div>
        <div
          class="space-y-3 md:space-y-0 sm:flex justify-between items-center"
        >
          <div class="flex items-center">
            <span class="text-sm text-gray-600 mr-2">Status</span>
            <span
              class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center"
            >
              <span class="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              Active
            </span>
          </div>
          <button
            v-if="vendor.data.profile.is_approved === 0"
            class="bg-mt-secondary text-white font-bold py-2 px-4 rounded"
            @click="approveVendor"
          >
            Approve vendor
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6">
        <div class="space-y-6">
          <div>
            <h3 class="text-[16px] text-text-1 mb-2">Contact information</h3>
            <div class="grid md:grid-cols-2 rounded-lg border p-4">
              <VendorText title="Name" :detail="vendor.data.fullname" />
              <VendorText title="Address" :detail="vendor.data.address" />
              <VendorText title="Email" :detail="vendor.data.email" />
              <VendorText
                title="Phone"
                :detail="vendor.data.profile?.phone ?? 'N/A'"
              />
            </div>
          </div>

          <div>
            <h3 class="text-[16px] text-text-1 mb-2">Business information</h3>
            <div class="grid md:grid-cols-2 rounded-lg border p-4">
              <VendorText
                title="Business Type"
                :detail="vendor.data.profile?.type"
              />
              <VendorText
                title="Business Name"
                :detail="vendor.data.profile?.business_name"
              />
            </div>
          </div>

          <div>
            <h3 class="text-[16px] text-text-1 mb-2">Account Details</h3>
            <div class="grid md:grid-cols-2 rounded-lg border p-4">
              <VendorText
                title="Bank Name"
                :detail="vendor.data.bank?.bank_name ?? 'N/A'"
              />
              <VendorText
                title="Account Name"
                :detail="vendor.data.bank?.account_name ?? 'N/A'"
              />
              <VendorText
                title="Account Number"
                :detail="vendor.data.bank?.account_number ?? 'N/A'"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-4 gap-2">
            <VendorCard
              title="Total Orders Completed"
              :detail="vendor.data.orders_completed"
            />
            <VendorCard title="Total Sales" :detail="vendor.data.meals_count" />
            <VendorCard
              title="Total Review"
              :detail="vendor.data.profile?.rating"
            />
            <VendorCard
              title="Total Product"
              :detail="vendor.data.meals_count"
            />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="p-6">
        <div class="flex justify-end space-x-4">
          <button
            class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Icon name="mdi:cash" class="w-5 h-5 mr-2" />
            Pay vendor
          </button>

          <button
            class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            @click="openSanctionModal"
          >
            <Icon name="mdi:pause" class="w-5 h-5 mr-2" />
            Review Vendor
          </button>
        </div>
      </div>
    </div>
  </div>

  <VendorReview
    :vendorId="vendorId"
    @close-sanction-modal="closeSanctionModal"
    v-else
  />
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useGlobalStore } from "~/stores/globalStore";
import authHeader from "~/services/authHeader";
import { customToast } from "~/composables/utils";
const { toggleModal } = useGlobalStore();

const props = defineProps({
  vendorId: {
    type: [String, Number],
    required: true,
  },
});

const config = useRuntimeConfig();
const vendor = ref(null);
const isLoading = ref(true);
const error = ref(null);
const isVendorDetail = ref(true);
const fetchVendorData = async () => {
  if (!props.vendorId) return;

  try {
    isLoading.value = true;
    error.value = null;
    const response = await fetch(
      `${config.public.baseURL}/admin/vendors/${props.vendorId}`,
      { headers: authHeader() }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch vendor data");
    }

    const data = await response.json();
    vendor.value = data;
  } catch (err) {
    error.value = err.message;
    console.error("Error fetching vendor:", err);
  } finally {
    isLoading.value = false;
  }
};

const approveVendor = async () => {
  try {
    const response = await fetch(
      `${config.public.baseURL}/admin/vendors/approval/${props.vendorId}/approve`,
      {
        method: "PATCH",
        headers: {
          ...authHeader(),
          "Content-Type": "application/json",
        },
      }
    );

    const res = await response.json();
    if (!response.ok) {
      throw new Error(res.message || "Failed to approve vendor");
    }

    await fetchVendorData();
    customToast(res.message, true);
  } catch (err) {
    customToast(err.message, false);
  }
};

watch(
  () => props.vendorId,
  (newId) => {
    if (newId) {
      fetchVendorData();
    }
  },
  { immediate: true }
);

// close modal
const closeModal = () => {
  toggleModal();
};

// open the sanction modal
const openSanctionModal = () => {
  isVendorDetail.value = false;
};

// close the sanction modal
const closeSanctionModal = () => {
  isVendorDetail.value = true;
  fetchVendorData();
};
onMounted(() => {
  if (props.vendorId) {
    fetchVendorData();
  }
});
</script>
