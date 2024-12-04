<template>
  <div class="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
    <div class="flex justify-end items-center mb-3">
      <button
        class="text-gray-600 hover:text-gray-700 bg-gray-200 rounded-full p-2"
      >
        <Icon icon="mdi:close" class="w-6 h-6" />
      </button>
    </div>
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-mt-secondary text-center">
        Order details
      </h2>
      <div class="flex items-center justify-center gap-4 pt-5">
        <div class="font-bold font-aileron text-[#555555]">Order ID: 5241</div>
        <button
          class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100/80 cursor-pointer select-none"
        >
          <div class="w-2.5 h-2.5 rounded-full bg-black/65"></div>
          <span class="text-[13px] text-black/65 font-normal">Pending</span>
          <Icon icon="mingcute:down-line" class="text-black/45" />
        </button>
      </div>
    </div>

    <!-- cards  -->
    <div class="grid grid-cols-4 gap-2 mb-6">
      <VendorCard title="Order Time " :detail="vendor.totalOrders" />
      <VendorCard title="Processed Time" :detail="vendor.totalSales" />
      <VendorCard title="Pick up time " :detail="vendor.totalReview" />
      <VendorCard title="delivery Time " :detail="vendor.totalProduct" />
    </div>

    <div class="mb-6">
      <h3 class="text-[16px] text-text-1 mb-2">Customer Contact information</h3>
      <div class="grid grid-cols-2 rounded-lg border p-4">
        <VendorText title="Name" :detail="vendor.name" />
        <VendorText title="Address" :detail="vendor.address" />
        <VendorText title="Email" :detail="vendor.email" />
        <VendorText title="Phone" :detail="vendor.phone" />
      </div>
    </div>
    <div class="mb-6">
      <h3 class="text-[16px] text-text-1 mb-2">Delivery person information</h3>
      <div class="grid grid-cols-2 rounded-lg border p-4">
        <VendorText title="Name" :detail="vendor.name" />
        <VendorText title="Phone" :detail="vendor.phone" />
        <VendorText title="Email" :detail="vendor.email" />
      </div>
    </div>

    <div class="mb-6">
      <h3 class="text-[16px] text-text-1 mb-2">Customer Account Details</h3>
      <div class="grid grid-cols-2 rounded-lg border p-4">
        <VendorText title="Bank Name " :detail="vendor.bankName" />
        <VendorText title="Account Name " :detail="vendor.accountName" />
        <VendorText title="Account Number " :detail="vendor.accountNumber" />
        <VendorText title="Payment Method " :detail="vendor.paymentMethod" />
      </div>
    </div>
    \
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const vendor = ref({
  name: "Ujah Emmanuel",
  address: "Blessed Hostel Sabba, Makurdi",
  email: "ujahemmaneul72@gmail.com",
  phone: "08169192646",
  businessType: "Restaurant",
  vendorId: "ID42345465",
  bankName: "UBA",
  accountName: "Ujah Emmanuel",
  accountNumber: "2063016701",
  paymentMethod: "Bank Transfer",
  totalOrders: 20,
  totalSales: "12,426",
  totalReview: "12,426",
  totalProduct: "12,426",
});
</script>
