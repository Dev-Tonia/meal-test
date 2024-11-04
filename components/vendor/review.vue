<template>
  <div
    class="w-[700px] relative h-fit mx-auto bg-white rounded-[4px] shadow-md px-5 py-10 sm:p-16 space-y-7"
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
      {{ "Review Vendor" }}
    </h2>
    <!-- <pre>{{ sanctionsList.data.data }}</pre> -->
    <form
      class="space-y-5 md:space-y-10"
      @submit.prevent="handleSubmitSanction"
    >
      <div class="max-w-md mx-auto p-6 space-y-4">
        <div class="space-y-2">
          <label class="block font-medium text-[#060606]">Sanction</label>
          <select
            v-model="selectedSanction"
            class="w-full rounded-md border border-[#E8EAED] shadow-sm bg-[#F2F2F2] outline-none py-5 px-3"
          >
            <option value="" disabled selected>Sanction list</option>
            <option
              v-for="sanction in sanctionsList.data.data"
              :key="sanction.id"
              :value="sanction.id"
            >
              {{ sanction.name }}
            </option>
          </select>
        </div>

        <div class="space-y-2">
          <label class="block font-medium text-[#060606]">Status</label>
          <select
            v-model="selectedStatus"
            class="w-full rounded-md border border-[#E8EAED] shadow-sm bg-[#F2F2F2] outline-none py-5 px-3"
          >
            <option value="" disabled selected>Select status</option>
            <option v-for="status in statuses" :key="status" :value="status">
              {{ status }}
            </option>
          </select>
        </div>

        <div class="space-y-2">
          <label class="block font-medium text-[#060606]">Sanction Note</label>
          <textarea
            v-model="sanctionNote"
            placeholder="Add a note"
            rows="4"
            class="w-full rounded-md border border-[#E8EAED] shadow-sm bg-[#F2F2F2] outline-none py-5 px-3"
          ></textarea>
        </div>
      </div>
      <MTButton
        :load-state="loading"
        text="Sanction Vendor"
        iconName="bxl:codepen"
      />
    </form>
  </div>
</template>

<script setup>
import authHeader from "~/services/authHeader";
const config = useRuntimeConfig();
const emit = defineEmits(["closeSanctionModal"]);

const { data: sanctionsList } = useFetch(
  `${config.public.baseURL}/admin/sanctions/active`,
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
const statuses = [
  "pending_approval",
  "disabled",
  "suspended",
  "disapproved",
  "quried",
  "rejected",
];

// close sanction modal
// Define the method
const closeSanctionModal = () => {
  emit("closeSanctionModal");
};

// Add these at the top of the script section
const loading = ref(false);
const router = useRouter();

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
