<template>
  <teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <!-- Modal Backdrop -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        @click="handleClose"
      ></div>

      <!-- Modal Container with max-height -->
      <div
        class="bg-white rounded-2xl shadow-lg mx-auto z-10 flex flex-col max-h-[90vh] w-full max-w-2xl m-4"
      >
        <!-- Fixed Header -->
        <div class="p-6 border-b">
          <div class="flex justify-end items-center mb-3">
            <button
              class="text-gray-600 hover:text-gray-700 bg-gray-200 rounded-full p-2"
              @click="handleClose"
            >
              <Icon icon="mdi:close" class="w-6 h-6" />
            </button>
          </div>
          <div class="mb-8">
            <h2 class="text-3xl font-bold text-mt-secondary text-center">
              Vendor details
            </h2>
          </div>
          <div class="flex justify-between items-center">
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
              class="bg-mt-secondary text-white font-bold py-2 px-4 rounded"
            >
              Approve vendor
            </button>
          </div>
        </div>

        <!-- Scrollable Content -->
        <div class="flex-1 overflow-y-auto p-6">
          <!-- <pre>{{ vendor }}</pre> -->
          <div class="space-y-6">
            <div>
              <h3 class="text-[16px] text-text-1 mb-2">Contact information</h3>
              <div class="grid grid-cols-2 rounded-lg border p-4">
                <VendorText title="Name" :detail="vendor.data.fullname" />
                <VendorText title="Address" :detail="vendor.data.address" />
                <VendorText title="Email" :detail="vendor.data.email" />
                <VendorText
                  title="Phone"
                  :detail="vendor.data.profile.phone ?? 'N/A'"
                />
              </div>
            </div>

            <div>
              <h3 class="text-[16px] text-text-1 mb-2">Business information</h3>
              <div class="grid grid-cols-2 rounded-lg border p-4">
                <VendorText
                  title="Business Type"
                  :detail="vendor.data.profile.type"
                />
                <VendorText
                  title="Business Name "
                  :detail="vendor.data.profile.business_name"
                />
              </div>
            </div>

            <div>
              <h3 class="text-[16px] text-text-1 mb-2">Account Details</h3>
              <div class="grid grid-cols-2 rounded-lg border p-4">
                <VendorText
                  title="Bank Name "
                  :detail="vendor.data.bank?.bank_name ?? 'N/A'"
                />
                <VendorText
                  title="Account Name "
                  :detail="vendor.data.bank?.account_name ?? 'N/A'"
                />
                <VendorText
                  title="Account Number "
                  :detail="vendor.data.bank?.account_number ?? 'N/A'"
                />
                <!-- <VendorText title="Payment Method " :detail="vendor.data" /> -->
              </div>
            </div>

            <div class="grid grid-cols-4 gap-2">
              <VendorCard
                title="Total Orders Completed"
                :detail="vendor.data.orders_completed"
              />

              <VendorCard
                title="Total Sales"
                :detail="vendor.data.meals_count"
              />
              <VendorCard
                title="Total Review"
                :detail="vendor.data.profile.rating"
              />
              <VendorCard title="Total Product" :detail="vendor.meals_count" />
            </div>
          </div>
        </div>

        <!-- Fixed Footer -->
        <div class="p-6 border-t">
          <div class="flex justify-end space-x-4">
            <button
              class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Icon icon="mdi:cash" class="w-5 h-5 mr-2" />
              Pay vendor
            </button>

            <button
              class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Icon icon="mdi:pause" class="w-5 h-5 mr-2" />
              Suspend Vendor
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import authHeader from "~/services/authHeader";

const props = defineProps({
  vendorId: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const config = useRuntimeConfig();
const vendor = ref(null);
const isLoading = ref(true);
const error = ref(null);

const fetchVendorData = async () => {
  if (!props.vendorId) return;

  try {
    isLoading.value = true;
    const response = await fetch(
      `${config.public.baseURL}/admin/vendors/${props.vendorId}`,
      { headers: authHeader() }
    );
    if (!response.ok) throw new Error("Failed to fetch vendor data");
    const data = await response.json();
    vendor.value = data;
  } catch (err) {
    error.value = err;
    console.error("Error fetching vendor:", err);
  } finally {
    isLoading.value = false;
  }
};

const handleClose = () => {
  emit("close");
};

onUnmounted(() => {
  vendor.value = null;
  error.value = null;
});

watch(
  () => props.vendorId,
  (newId) => {
    if (newId) {
      fetchVendorData();
    }
  },
  { immediate: true }
);
</script>
