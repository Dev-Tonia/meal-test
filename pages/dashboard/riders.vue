<template>
  <div class="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-indigo-900">Vendor details</h2>
      <button class="text-gray-500 hover:text-gray-700">
        <Icon icon="mdi:close" class="w-6 h-6" />
      </button>
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
      <button
        class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
      >
        Approve vendor
      </button>
    </div>

    <div class="mb-6">
      <h3 class="text-sm font-medium text-gray-500 mb-2">
        Contact information
      </h3>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="text-sm font-medium">Name</p>
          <p class="text-sm text-gray-600">{{ vendor.name }}</p>
        </div>
        <div>
          <p class="text-sm font-medium">Address</p>
          <p class="text-sm text-gray-600">{{ vendor.address }}</p>
        </div>
        <div>
          <p class="text-sm font-medium">Email</p>
          <p class="text-sm text-gray-600">{{ vendor.email }}</p>
        </div>
        <div>
          <p class="text-sm font-medium">Phone</p>
          <p class="text-sm text-gray-600">{{ vendor.phone }}</p>
        </div>
      </div>
    </div>

    <div class="mb-6">
      <h3 class="text-sm font-medium text-gray-500 mb-2">
        Business information
      </h3>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="text-sm font-medium">Business Type</p>
          <p class="text-sm text-gray-600">{{ vendor.businessType }}</p>
        </div>
        <div>
          <p class="text-sm font-medium">Vendor ID</p>
          <p class="text-sm text-gray-600">{{ vendor.vendorId }}</p>
        </div>
      </div>
    </div>

    <div class="mb-6">
      <h3 class="text-sm font-medium text-gray-500 mb-2">Account Details</h3>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="text-sm font-medium">Bank Name</p>
          <p class="text-sm text-gray-600">{{ vendor.bankName }}</p>
        </div>
        <div>
          <p class="text-sm font-medium">Account Name</p>
          <p class="text-sm text-gray-600">{{ vendor.accountName }}</p>
        </div>
        <div>
          <p class="text-sm font-medium">Account Number</p>
          <p class="text-sm text-gray-600">{{ vendor.accountNumber }}</p>
        </div>
        <div>
          <p class="text-sm font-medium">Payment Method</p>
          <p class="text-sm text-gray-600">{{ vendor.paymentMethod }}</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-4 gap-4 mb-6">
      <div class="bg-gray-50 p-4 rounded-lg">
        <p class="text-xs text-gray-500 mb-1">TOTAL ORDERS COMPLETED</p>
        <p class="text-2xl font-bold text-gray-800">{{ vendor.totalOrders }}</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <p class="text-xs text-gray-500 mb-1">TOTAL SALES</p>
        <p class="text-2xl font-bold text-gray-800">₦{{ vendor.totalSales }}</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <p class="text-xs text-gray-500 mb-1">TOTAL REVIEW</p>
        <p class="text-2xl font-bold text-gray-800">
          ${{ vendor.totalReview }}
        </p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <p class="text-xs text-gray-500 mb-1">TOTAL PRODUCT</p>
        <p class="text-2xl font-bold text-gray-800">
          ${{ vendor.totalProduct }}
        </p>
      </div>
    </div>

    <div class="flex justify-center space-x-4">
      <button
        class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
      >
        <Icon icon="mdi:cash" class="w-5 h-5 mr-2" />
        Pay vendor
      </button>
      <button
        class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
      >
        <Icon icon="mdi:pencil" class="w-5 h-5 mr-2" />
        Edit Vendor
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
