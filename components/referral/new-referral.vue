<template>
  <div
    class="w-[700px] relative h-fit mx-auto bg-white rounded-lg overflow-hidden shadow-md px-5 py-10 sm:p-16 space-y-7"
  >
    <Icon
      @click="closeSanctionModal"
      role="button"
      name="ci:close-big"
      color="#292D32"
      size="34px"
      class="absolute top-10 right-10 bg-[#A1B1CC] p-1.5 cursor-pointer rounded-full"
    />
    <h2 class="text-center text-[#211658] text-3xl font-medium">
      Create Referral Program
    </h2>
    <pre>{{ rewards.data.data }}</pre>
    <div v-if="status.pending">loading ....</div>

    <form
      v-else
      class="space-y-5 md:space-y-10"
      @submit.prevent="handleSubmitSanction"
    >
      <div class="max-w-md mx-auto p-6 space-y-4">
        <CustomInput
          label="Title"
          name="title"
          placeholder="Enter a title for the program"
        />
        <CustomInput
          label="Description"
          name="description"
          placeholder="Description"
        />

        <ReferralSelect placeholder="Select user type" label="User Type">
          <SelectItem
            :value="item"
            v-for="(item, index) in userTypes"
            :key="item"
          >
            {{ item }}
          </SelectItem>
        </ReferralSelect>
        <CustomInput
          label="Criteria"
          name="criteria"
          placeholder="Number of referrals"
          input-type="number"
        />
        <ReferralSelect placeholder="Select reward type" label="Reward Type">
          <SelectItem
            v-for="reward in rewards.data?.data"
            :key="reward.id"
            :value="reward.uuid"
          >
            {{ reward.name }}
          </SelectItem>
        </ReferralSelect>

        <div class="space-y-2">
          <div class="flex gap-10">
            <ReferralDate placeholder=" Enter start date" label="Start Date" />

            <ReferralDate placeholder="Enter end date" label="End Date" />
          </div>
        </div>

        <div class="mt-4">
          <MTButton
            :load-state="loading"
            text="Create Ref Program"
            iconName="bxl:codepen"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { SelectItem } from "@/components/ui/select";
import authHeader from "~/services/authHeader";
const config = useRuntimeConfig();
const emit = defineEmits(["closeSanctionModal"]);

const { data: rewards, status } = useFetch(
  `${config.public.baseURL}/admin/rewards`,
  {
    headers: authHeader(),
  }
);

const selectedSanction = ref("");
const selectedStatus = ref("");
const sanctionNote = ref("");
const props = defineProps({
  vendorId: {
    type: [String, Number],
    required: true,
  },
});
const userTypes = ["Users", "Vendors"];

// close sanction modal
// Define the method
const closeSanctionModal = () => {
  emit("closeSanctionModal");
};

// Add these at the top of the script section
const loading = ref(false);

// Add this function in the script section
const handleSubmitSanction = async () => {
  loading.value = true;

  // Validate required fields
  if (!selectedSanction.value || !selectedStatus.value) {
    loading.value = false;
    return;
  }

  try {
    const response = await $fetch(
      `${config.public.baseURL}/admin/vendors/approval/${props.vendorId}/sanction`,
      {
        method: "POST",
        headers: {
          ...authHeader(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sanction_category_id: Number(selectedSanction.value),
          status: selectedStatus.value,
          sanction_note: sanctionNote.value,
        }),
      }
    );

    loading.value = false;
    customToast(response.message, response.success);
    closeSanctionModal();
  } catch (error) {
    loading.value = false;
    customToast(error.message, false);
  }
};
</script>

<style scoped></style>
