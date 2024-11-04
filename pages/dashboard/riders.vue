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
        Vendor details
      </h2>
    </div>
    <div class="flex justify-between items-center mb-6">
      <div class="flex items-center">
        <span class="text-sm text-gray-600 mr-2">Status</span>
        <span
          class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center"
        >
          <span class="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
          Active
        </span>
      </div>
      <button class="bg-mt-secondary text-white font-bold py-2 px-4 rounded">
        Approve vendor
      </button>
    </div>

    <div class="mb-6">
      <h3 class="text-[16px] text-text-1 mb-2">Contact information</h3>
      <div class="grid grid-cols-2 rounded-lg border p-4">
        <VendorText title="Name" :detail="vendor.name" />
        <VendorText title="Address" :detail="vendor.address" />
        <VendorText title="Email" :detail="vendor.email" />
        <VendorText title="Phone" :detail="vendor.phone" />
      </div>
    </div>
    <div class="mb-6">
      <h3 class="text-[16px] text-text-1 mb-2">Business information</h3>
      <div class="grid grid-cols-2 rounded-lg border p-4">
        <VendorText title="Business Type" :detail="vendor.businessType" />
        <VendorText title="Vendor ID " :detail="vendor.vendorId" />
      </div>
    </div>

    <div class="mb-6">
      <h3 class="text-[16px] text-text-1 mb-2">Account Details</h3>
      <div class="grid grid-cols-2 rounded-lg border p-4">
        <VendorText title="Bank Name " :detail="vendor.bankName" />
        <VendorText title="Account Name " :detail="vendor.accountName" />
        <VendorText title="Account Number " :detail="vendor.accountNumber" />
        <VendorText title="Payment Method " :detail="vendor.paymentMethod" />
      </div>
    </div>

    <div class="grid grid-cols-4 gap-2 mb-6">
      <VendorCard title="total orders Complete" :detail="vendor.totalOrders" />
      <VendorCard title="Total Sales" :detail="vendor.totalSales" />
      <VendorCard title="Total Review" :detail="vendor.totalReview" />
      <VendorCard title="Total Product" :detail="vendor.totalProduct" />
    </div>

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
