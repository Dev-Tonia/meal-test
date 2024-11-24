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
    <!-- <pre>{{ orderDetails }}</pre> -->
    <!-- cards  -->
    <div class="grid grid-cols-4 gap-2 mb-6">
      <VendorCard title="Order Time " :detail="orderDetails.data.totalOrders" />
      <VendorCard
        title="Processed Time"
        :detail="orderDetails.data.estimated_duration ?? 'N/A'"
      />
      <VendorCard
        title="Pick up time "
        :detail="orderDetails.data.totalReview"
      />
      <VendorCard
        title="delivery Time "
        :detail="orderDetails.data.arrived_at ?? 'N/A'"
      />
    </div>

    <div class="mb-6">
      <h3 class="text-[16px] text-text-1 mb-2">Customer Contact information</h3>
      <div class="grid grid-cols-2 rounded-lg border p-4">
        <VendorText title="Name" :detail="orderDetails.data.user.fullname" />
        <VendorText title="Address" :detail="orderDetails.data.address" />
        <VendorText title="Email" :detail="orderDetails.data.user.email" />
        <VendorText title="Phone" :detail="orderDetails.data.phone" />
      </div>
    </div>
    <div class="mb-6">
      <h3 class="text-[16px] text-text-1 mb-2">Delivery person information</h3>
      <div class="grid grid-cols-2 rounded-lg border p-4">
        <VendorText title="Name" :detail="orderDetails.data.name" />
        <VendorText title="Phone" :detail="orderDetails.data.phone" />
        <VendorText title="Email" :detail="orderDetails.data.email" />
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

  <!-- 
    "data": {
        "id": "4cd528e5-07cc-4d4d-a4a8-e4013affd1b3",
        "delivery_fee": 3000,
        "total": 35637,
        "status": "cancelled",
        "payment_method": "paystack",
        "payforme": null,
        "order_number": "471732268346",
        "meal_count": 4,
        "user": {
            "id": 38,
            "email": "eudora.mealtrips@gmail.com",
            "firstname": "Yudee",
            "lastname": "Mara",
            "fullname": "Yudee Mara"
        },
        "vendor": "Marachuckuw World",
        "items": [
            {
                "id": "3d44d916-f5f7-448f-b148-f840b634e95e",
                "meal": {
                    "id": "8e4dc8a5-1700-4069-9480-8fd5b7f7813b",
                    "name": "Tuna",
                    "description": "Clothing violet Ball",
                    "price": 9350,
                    "images": [
                        "https://plus.unsplash.com/premium_photo-1661777702966-aed29ab4106b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVhbHxlbnwwfHwwfHx8MA%3D%3D"
                    ],
                    "type": "single",
                    "category_id": 2,
                    "vendor_id": 47,
                    "is_active": 1
                },
                "product": {
                    "id": "8e4dc8a5-1700-4069-9480-8fd5b7f7813b",
                    "name": "Tuna",
                    "description": "Clothing violet Ball",
                    "price": 9350,
                    "images": [
                        "https://plus.unsplash.com/premium_photo-1661777702966-aed29ab4106b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVhbHxlbnwwfHwwfHx8MA%3D%3D"
                    ],
                    "type": "single",
                    "category_id": 2,
                    "vendor_id": 47,
                    "is_active": 1
                },
                "items_count": 1,
                "total": 30360,
                "date": "2024-11-22T09:39:06.000000Z"
            },
            {
                "id": "378fca6d-9360-43b3-af4e-592b33a8c543",
                "meal": {
                    "id": "a168fad6-4c25-41c7-a63f-82a61d8a54e6",
                    "name": "Keyboard",
                    "description": "District functionalities azure monitor Handmade",
                    "price": 7480,
                    "images": [
                        "https://img.freepik.com/premium-photo/grilled-beef-steak-with-potatoes-basil-white-plate-white-background_79830-842.jpg?w=996"
                    ],
                    "type": "single",
                    "category_id": 2,
                    "vendor_id": 47,
                    "is_active": 1
                },
                "product": {
                    "id": "a168fad6-4c25-41c7-a63f-82a61d8a54e6",
                    "name": "Keyboard",
                    "description": "District functionalities azure monitor Handmade",
                    "price": 7480,
                    "images": [
                        "https://img.freepik.com/premium-photo/grilled-beef-steak-with-potatoes-basil-white-plate-white-background_79830-842.jpg?w=996"
                    ],
                    "type": "single",
                    "category_id": 2,
                    "vendor_id": 47,
                    "is_active": 1
                },
                "items_count": 1,
                "total": 30360,
                "date": "2024-11-22T09:39:06.000000Z"
            },
            {
                "id": "a0904144-8a21-4e12-b953-9dea23db667c",
                "meal": {
                    "id": "3ebc3dad-3764-4a44-8e12-a853b0ab99d2",
                    "name": "Computer",
                    "description": "Mountain dot-com multi-byte",
                    "price": 7480,
                    "images": [
                        "https://img.freepik.com/free-photo/fresh-gourmet-meal-grilled-beef-salad-generated-by-ai_188544-10126.jpg?t=st=1732166780~exp=1732170380~hmac=87175842f0a1b92adc58fa9edf58606e41c9a7c98bdf55397c7e777d191e3741&w=1380"
                    ],
                    "type": "single",
                    "category_id": 2,
                    "vendor_id": 47,
                    "is_active": 1
                },
                "product": {
                    "id": "3ebc3dad-3764-4a44-8e12-a853b0ab99d2",
                    "name": "Computer",
                    "description": "Mountain dot-com multi-byte",
                    "price": 7480,
                    "images": [
                        "https://img.freepik.com/free-photo/fresh-gourmet-meal-grilled-beef-salad-generated-by-ai_188544-10126.jpg?t=st=1732166780~exp=1732170380~hmac=87175842f0a1b92adc58fa9edf58606e41c9a7c98bdf55397c7e777d191e3741&w=1380"
                    ],
                    "type": "single",
                    "category_id": 2,
                    "vendor_id": 47,
                    "is_active": 1
                },
                "items_count": 1,
                "total": 30360,
                "date": "2024-11-22T09:39:06.000000Z"
            },
            {
                "id": "ed184e0a-10bf-494c-99db-ada077d70308",
                "meal": {
                    "id": "c4cd46c0-6cde-4a46-903a-af968a2a3d0a",
                    "name": "Chips",
                    "description": "Concrete bandwidth New deliverables efficient",
                    "price": 6050,
                    "images": [
                        "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?t=st=1732166697~exp=1732170297~hmac=ea4fd4795f41fb1948074ec2702149dc6e8895b2eac2abd52e2a2fa6f0de2bfb&w=996"
                    ],
                    "type": "single",
                    "category_id": 2,
                    "vendor_id": 47,
                    "is_active": 1
                },
                "product": {
                    "id": "c4cd46c0-6cde-4a46-903a-af968a2a3d0a",
                    "name": "Chips",
                    "description": "Concrete bandwidth New deliverables efficient",
                    "price": 6050,
                    "images": [
                        "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?t=st=1732166697~exp=1732170297~hmac=ea4fd4795f41fb1948074ec2702149dc6e8895b2eac2abd52e2a2fa6f0de2bfb&w=996"
                    ],
                    "type": "single",
                    "category_id": 2,
                    "vendor_id": 47,
                    "is_active": 1
                },
                "items_count": 1,
                "total": 30360,
                "date": "2024-11-22T09:39:06.000000Z"
            }
        ],
        "delivery_info": {
            "id": 131,
            "name": "Yudee Mara",
            "address": "Makurdi Morden Market, Makurdi, Nigeria",
            "phone": "7089696581",
            "longitude": "8.497624",
            "latitude": "7.725247"
        },
        "order_date": "2024-11-22T09:39:06.000000Z",
        "logistics_partner": null,
        "rider_name": null,
        "rider_phone": null,
        "accepted_at": null,
        "prepared_at": null,
        "dispatched_at": null,
        "rejected_at": null,
        "enroute_pickup_at": null,
        "cancelled_at": "2024-11-22 10:55:04",
        "arrived_at": null,
        "rider_assigned_at": null,
        "distance": null,
        "estimated_duration": null,
        "completed_at": null
    } -->
</template>

<script setup>
import { ref } from "vue";
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

console.log(orderDetails);
</script>
