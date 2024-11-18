<template>
  <div class="flex flex-wrap justify-between items-center py-4">
    <PageTitle page-title="Referral programs" />

    <BaseButton
      class="bg-mt-secondary text-white"
      :btnData="{
        iconName: 'ic:round-add',
        title: 'New Referral Program',
      }"
      @click="toggleModal"
    />
  </div>
  <div class="py-9">
    <!-- <pre>{{ allReferrals }}</pre> -->
    <!-- referral card -->
    <div
      class="bg-white shadow-xl p-6 rounded-[8px] max-w-3xl w-full my-5"
      v-for="(referral, index) in allReferrals"
      :key="index"
    >
      <!-- header -->
      <div class="flex items-center justify-between">
        <div
          class="border border-mt-secondary bg-mt-secondary/10 px-3 text-mt-secondary font-semibold text-xs rounded-full inline-block"
        >
          {{ referral.user_type }}
        </div>

        <div
          class="w-10 h-6 flex items-center bg-gray-200 rounded-full p-1 cursor-pointer"
          :class="{ 'bg-green-600': referral.is_active === 1 }"
          @click="toggleReferral(referral.id)"
        >
          <div
            class="bg-white h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out"
            :class="{ 'translate-x-4': referral.is_active === 1 }"
          />
        </div>
      </div>

      <!-- description -->
      <div class="pt-4 sm:flex gap-7 justify-between sm:w-10/12">
        <div>
          <h4 class="font-bold font-aileron text-[#393939] text-[22px] mb-1">
            {{ referral.name }}
          </h4>
          <p class="text-[#8D8F9C] text-sm">
            {{ referral.description }}
          </p>
          <div class="flex items-center space-x-1 mt-2.5">
            <div
              class="border border-[#8E98A8] bg-[#F5F5F5] text-[#393939] px-3 text-sm font-medium rounded-full inline-block"
            >
              Qualified: {{ referral.criteria }}
            </div>
            <div
              class="border border-[#8E98A8] bg-[#F5F5F5] text-[#393939] px-3 text-sm font-medium rounded-full inline-block"
            >
              Used: 200
            </div>
          </div>
        </div>
        <div class="pt-2 sm:pt-0">
          <div class="mb-2">
            <p class="text-text-1">Valid Until</p>
            <h6 class="font-bold">{{ formattedDate(referral.end_date) }}</h6>
          </div>
          <div class="flex items-center space-x-1 mt-2">
            <button class="sm-btn" @click="deleteReferral(referral.id)">
              <div class="flex gap-2 items-center justify-center">
                <Icon name="tabler:trash" size="28" />
                Delete
                <!-- Slot for icon in the right -->
              </div>
            </button>
            <button class="sm-btn" @click="getReferralDetail(referral.id)">
              <div class="flex gap-2 items-center justify-center">
                <Icon name="lucide:pen" size="28" />
                Edit
                <!-- Slot for icon in the right -->
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal v-if="openModal">
    <!-- <p>Hello</p> -->
    <ReferralNewReferral :initialData="referralDetail" />
  </Modal>
</template>

<script setup>
import { useIsOpen } from "../../composables/openModal";

const { toggleModal } = useGlobalStore();
const { openModal } = storeToRefs(useGlobalStore());
import authHeader from "~/services/authHeader";
const config = useRuntimeConfig();

const { data: referrals, refresh } = useFetch(
  `${config.public.baseURL}/admin/programs`,
  {
    headers: authHeader(),
  }
);

// get the data from the api
const allReferrals = computed(() => referrals.value?.data.data);

import { format } from "date-fns";

// format date
const formattedDate = computed(() => {
  return (dateValue) => {
    const date = new Date(dateValue);
    return format(date, "MMMM d yyyy");
  };
});

// activate a referral
const toggleReferral = async (id) => {
  try {
    const response = await $fetch(
      `${config.public.baseURL}/admin/programs/${id}/toggleApproval`,
      {
        method: "PATCH",
        headers: {
          ...authHeader(),
          "Content-Type": "application/json",
        },
      }
    );

    customToast(response.message, response.success);
    refresh();
  } catch (err) {
    if (err.response) {
      customToast(err.response._data.message, err.response._data.success);
    }
  }
};

const deleteReferral = async (id) => {
  try {
    const response = await $fetch(
      `${config.public.baseURL}/admin/programs/${id}/delete`,
      {
        method: "DELETE",
        headers: {
          ...authHeader(),
          "Content-Type": "application/json",
        },
      }
    );

    customToast(response.message, response.success);
    refresh(); // Refresh the referrals list
  } catch (err) {
    if (err.response) {
      customToast(err.response._data.message, err.response._data.success);
    }
  }
};

// getting the referral that was clicked for edit
const referralDetail = ref("");
const getReferralDetail = async (id) => {
  try {
    const response = await $fetch(
      `${config.public.baseURL}/admin/programs/${id}`,
      {
        method: "GET",
        headers: {
          ...authHeader(),
          "Content-Type": "application/json",
        },
      }
    );
    referralDetail.value = response.data;
    customToast(response.message, response.success);
    toggleModal();
  } catch (err) {
    if (err.response) {
      customToast(err.response._data.message, err.response._data.success);
    }
  }
};
</script>

<style scoped>
.sm-btn {
  @apply px-4 shadow overflow-hidden shadow-[#1018280D]  border border-[#8E98A8] bg-[#F5F5F5] text-[#393939] py-1 rounded-[8px];
}
</style>
