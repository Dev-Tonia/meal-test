<template>
  <div class="bg-white rounded-2xl shadow-lg p-6 max-w-3xl mx-auto">
    <div class="flex justify-end items-center mb-3">
      <button
        class="text-gray-600 hover:text-gray-700 bg-gray-200 rounded-full p-2"
        @click="toggleModal"
      >
        <Icon icon="mdi:close" class="w-6 h-6" />
      </button>
    </div>
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-mt-secondary text-center">
        Order details
      </h2>
      <div class="flex items-center justify-center gap-4 pt-5">
        <div class="font-bold font-aileron text-[#555555]">
          Order ID: {{ orderDetails.data.order_number }}
        </div>
        <button
          class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100/80 cursor-pointer select-none"
        >
          <div class="w-2.5 h-2.5 rounded-full bg-black/65"></div>
          <span class="text-[13px] text-black/65 font-normal">{{
            orderDetails.data.status
          }}</span>
          <Icon icon="mingcute:down-line" class="text-black/45" />
        </button>
      </div>
    </div>
    <!-- cards  -->
    <div class="grid grid-cols-4 gap-2 mb-6">
      <VendorCard
        title="Order Time "
        :detail="formatTimeValue(orderDetails.data.order_date) ?? 'N/A'"
      />
      <VendorCard
        title="Processed Time"
        :detail="String(orderDetails.data.estimated_duration) ?? 'N/A'"
      />
      <VendorCard
        title="Pick up time "
        :detail="formatTimeValue(orderDetails.data.enroute_pickup_at) ?? 'N/A'"
      />
      <VendorCard
        title="delivery Time "
        :detail="formatTimeValue(orderDetails.data.completed_at) ?? 'N/A'"
      />
    </div>

    <!-- order items -->
    <div class="mb-6">
      <h3 class="text-[16px] text-text-1 mb-2">Order item details</h3>
      <div class="rounded-lg border p-4">
        <div class="flex items-center justify-between">
          <!-- items array -->
          <div class="grid grid-cols-2 gap-3">
            <div
              class="flex items-center gap-2"
              v-for="(item, index) in orderDetails.data.items"
              :key="index"
            >
              <p class="text-[16px] text-gray-600">
                {{ item.items_count }}x {{ item.product.name }}
              </p>
              <p class="font-bold">₦ {{ item.product.price }}</p>
            </div>
            <!-- <VendorText title="Email" :detail="orderDetails.data.email" /> -->
          </div>

          <div class="text-mt-secondary-900">
            <p>Amount paid</p>
            <h2 class="font-bold text-2xl">₦ {{ orderDetails.data.total }}</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- customer info  -->
    <div class="mb-6">
      <h3 class="text-[16px] text-text-1 mb-2">Customer Contact information</h3>
      <div class="grid grid-cols-2 rounded-lg border p-4">
        <VendorText
          title="Name"
          :detail="orderDetails.data.delivery_info.name"
        />
        <VendorText
          title="Address"
          :detail="orderDetails.data.delivery_info.address"
        />
        <VendorText title="Email" :detail="orderDetails.data.user.email" />
        <VendorText
          title="Phone"
          :detail="orderDetails.data.delivery_info.phone"
        />
      </div>
    </div>

    <!-- delivery info -->
    <div class="mb-6">
      <h3 class="text-[16px] text-text-1 mb-2">Delivery person information</h3>
      <div class="grid grid-cols-2 rounded-lg border p-4">
        <VendorText title="Name" :detail="orderDetails.data.rider_name" />
        <VendorText title="Phone" :detail="orderDetails.data.rider_phone" />
        <!-- <VendorText title="Email" :detail="orderDetails.data.email" /> -->
      </div>
    </div>

    <div class="mb-6">
      <h3 class="text-[16px] text-text-1 mb-2">Customer Account Details</h3>
      <div class="grid grid-cols-2 rounded-lg border p-4">
        <VendorText title="Bank Name " :detail="orderDetails.data.bankName" />
        <VendorText
          title="Account Name "
          :detail="orderDetails.data.accountName"
        />
        <VendorText
          title="Account Number "
          :detail="orderDetails.data.accountNumber"
        />
        <VendorText
          title="Payment Method "
          :detail="orderDetails.data.paymentMethod"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const { toggleModal } = useGlobalStore();
const config = useRuntimeConfig();
import authHeader from "~/services/authHeader";

const props = defineProps({
  orderId: {
    type: [String, Number],
    required: true,
  },
});
const { data: orderDetails } = await useAsyncData("orderDetails", () =>
  $fetch(`${config.public.baseURL}/admin/orders/view/${props.orderId}`, {
    headers: {
      ...authHeader(),
    },
  })
);

// format time
const formatTimeValue = computed(() => {
  return (value) => {
    if (!value) return "N/A";
    return formatTime(value);
  };
});
</script>
