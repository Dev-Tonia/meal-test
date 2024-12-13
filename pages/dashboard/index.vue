<script setup>
import { overviewHeaders } from "~/composables/data";
import authHeader from "~/services/authHeader";
import { format } from "date-fns";

const { toggleModal, getAssignableRoles } = useGlobalStore();
const { openModal, addAdminStatus } = storeToRefs(useGlobalStore());
const { getCurrentUser } = useAuthStore();

onMounted(async () => {
  getAssignableRoles();
  await getCurrentUser();
});

const {
  data: overview,
  pending: isOverview,
  error: overviewErr,
} = useApiCall("/admin/dashboard/overview", {
  headers: authHeader(),
});

const {
  data: orders,
  pending: isOrders,
  error: ordersErr,
} = useApiCall("/admin/orders/all", {
  headers: authHeader(),
});

const satOverview = computed(() => {
  return overview.value?.data;
});

const ordersData = computed(() => {
  return orders.value?.data.data;
});

const formatDateTime = (dateString) => {
  const pattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{6}Z$/;
  if (pattern.test(dateString)) {
    return format(new Date(dateString), "yyyy-MM-dd:HH:mm:ss");
  }
  return dateString;
};

const dateAndTime = computed(() => {
  return ordersData.value?.map((price) => formatDateTime(price.order_date));
});

const selectedOrderId = ref(null);

const handleViewMore = (orderId) => {
  selectedOrderId.value = orderId;
  toggleModal();
};
</script>

<template>
  <div class="flex flex-wrap justify-between items-center py-4">
    <PageTitle page-title="Admin Dashboard" />

    <Modal v-if="openModal">
      <add-admin v-if="addAdminStatus"></add-admin>
      <modal-message
        v-else
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :visible="{ opacity: 1, scale: 1 }"
      ></modal-message>
    </Modal>

    <BaseButton
      @click="toggleModal()"
      class="bg-text-1 text-white"
      :btnData="{
        iconName: 'ic:round-add',
        title: 'Add Admin',
      }"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <template v-if="!isOverview">
      <Cards-Card :positive="false">
        <template #title>Today Sales</template>
        <template #price>{{ satOverview?.today_sales }}</template>
        <template #statNumber>36</template>
      </Cards-Card>
      <Cards-Card variant="secondary">
        <template #title>Total Sales</template>
        <template #price>{{ satOverview?.total_sales }}</template>
        <template #statNumber>36</template>
      </Cards-Card>
      <Cards-Card :positive="false">
        <template #title>Total Orders</template>
        <template #price>{{ satOverview?.orders_count }}</template>
        <template #statNumber>8</template>
      </Cards-Card>
      <Cards-Card :positive="false">
        <template #title>customers</template>
        <template #price>{{ satOverview?.customers_count }}</template>
        <template #statNumber>36</template>
      </Cards-Card>
      <Cards-Card variant="secondary">
        <template #title>Vendors</template>
        <template #price>{{ satOverview?.vendors_count }}</template>
        <template #statNumber>36</template>
      </Cards-Card>
      <Cards-Card :positive="false">
        <template #title>riders</template>
        <template #price>{{ satOverview?.riders_count }}</template>
        <template #statNumber>8</template>
      </Cards-Card>
    </template>
    <Spinner v-else />
  </div>

  <div class="flex flex-col my-6 rounded shadow-xl shadow-gray-200">
    <div class="font-bold text-[#393939] p-5">Recent Orders</div>

    <ReusableTable :tableTitles="overviewHeaders">
      <TableRow v-for="(data, index) in ordersData" :key="index">
        <TableCheckbox />
        <TableData :data="dateAndTime[index]" />
        <TableData :data="data.order_number" />
        <TableData :data="data.rider_name ? data.rider_name : 'N/A'" />
        <TableData
          :data="data.dispatched_at ? formatTime(data.dispatched_at) : '--:--'"
        />
        <TableData
          :data="data.completed_at ? formatTime(data.completed_at) : '--:--'"
        />
        <TableData :data="data.distance ? data.distance : '00(KM)'" />
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

  <Modal v-if="openModal">
    <OrdersDetails :orderId="selectedOrderId" />
  </Modal>
</template>
