<template>
  <div
    class="max-w-[700px] relative h-fit mx-auto bg-white rounded-lg overflow-hidden shadow-md px-5 py-10 sm:p-16 space-y-7"
  >
    <Icon
      @click="handleCloseModal"
      role="button"
      name="ci:close-big"
      color="#292D32"
      size="34px"
      class="absolute top-10 right-10 bg-[#A1B1CC] p-1.5 cursor-pointer rounded-full"
    />
    <h2 class="text-center text-[#211658] text-3xl font-medium">
      Create Referral Program
    </h2>
    <div
      v-if="status.pending"
      class="flex justify-center items-center h-[300px]"
    >
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <form v-else class="space-y-5 md:space-y-10" @submit.prevent="onSubmit">
      <div class="max-w-md mx-auto p-6 space-y-4">
        <CustomInput
          label="Title"
          name="title"
          placeholder="Enter a title for the program"
          v-model="title"
          v-bind="titleProps"
        />
        <CustomInput
          label="Description"
          name="description"
          placeholder="Description"
          v-model="description"
          v-bind="descriptionProps"
        />

        <ReferralSelect
          placeholder="Select user type"
          label="User Type"
          :name="'user_type'"
          v-model="user_type"
          v-bind="user_typeProps"
        >
          <SelectItem :value="item" v-for="item in userTypes" :key="item">
            {{ item }}
          </SelectItem>
        </ReferralSelect>

        <CustomInput
          label="Criteria"
          name="criteria"
          placeholder="Number of referrals"
          input-type="number"
          v-model="criteria"
          v-bind="criteriaProps"
        />

        <ReferralSelect
          placeholder="Select reward type"
          label="Reward Type"
          v-model="reward"
          v-bind="rewardProps"
          :name="'reward'"
        >
          <SelectItem
            v-for="reward in rewards?.data?.data || []"
            :key="reward.id"
            :value="reward.uuid"
          >
            {{ reward.name }}
          </SelectItem>
        </ReferralSelect>

        <div class="space-y-2">
          <div class="flex gap-10">
            <ReferralDate
              placeholder="Enter start date"
              label="Start Date"
              v-model="start_date"
              v-bind="start_dateProps"
              :name="'start_date'"
            />

            <ReferralDate
              placeholder="Enter end date"
              label="End Date"
              v-model="end_date"
              v-bind="end_dateProps"
              :name="'end_date'"
            />
          </div>
        </div>

        <div class="mt-4">
          <MTButton
            :loading="loading"
            text="Create Ref Program"
            iconName="bxl:codepen"
          />
        </div>
      </div>
    </form>
    <!-- <p>Hello</p> -->
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { SelectItem } from "@/components/ui/select";
import authHeader from "~/services/authHeader";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
const { toggleModal } = useGlobalStore();

import * as z from "zod";

const config = useRuntimeConfig();
const emit = defineEmits(["closeModal"]);
const loading = ref(false);

// Validation schema
const schema = toTypedSchema(
  z.object({
    title: z
      .string({ required_error: "Tile is required" })
      .min(1, "Title is required"),
    description: z
      .string({ required_error: "Description  is required" })
      .min(1, "Description is required"),
    user_type: z
      .string({ required_error: "User type  is required" })
      .min(1, "User type is required"),
    criteria: z
      .string({ required_error: "Criteria is required" })
      .min(1, "Criteria is required"),
    reward: z
      .string({ required_error: "Reward type is required" })
      .min(1, "Reward type is required"),
    start_date: z.date({ required_error: "Start date is required" }).min(
      new Date(new Date().setHours(0, 0, 0, 0)), // Convert timestamp to Date
      "Start date must be today or in the future"
    ),
    end_date: z
      .date({ required_error: "End date is required" })
      .min(new Date(), "End date must be in the future"),
  })
);

// Form handling
const { handleSubmit, errors, defineField } = useForm({
  validationSchema: schema,
});

const [title, titleProps] = defineField("title");
const [description, descriptionProps] = defineField("description");
const [user_type, user_typeProps] = defineField("user_type");
const [criteria, criteriaProps] = defineField("criteria");
const [reward, rewardProps] = defineField("reward");
const [start_date, start_dateProps] = defineField("start_date");
const [end_date, end_dateProps] = defineField("end_date");

// API calls
const { data: rewards, status } = useFetch(
  `${config.public.baseURL}/admin/rewards`,
  {
    headers: authHeader(),
  }
);

// User types
const userTypes = ["Customer", "Vendors"];

// Methods
const handleCloseModal = () => {
  toggleModal();
};
// to format the date

const formatToYYYYMMDD = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

const handleCreateReferral = async (values) => {
  console.log("trying to submit");

  const start_date = formatToYYYYMMDD(values.start_date);
  const end_date = formatToYYYYMMDD(values.end_date);
  try {
    loading.value = true;
    const response = await $fetch(`${config.public.baseURL}/admin/programs`, {
      method: "POST",
      headers: {
        ...authHeader(),
        "Content-Type": "application/json",
      },
      body: {
        name: values.title,
        description: values.description,
        user_type: values.user_type.tolowerCase(),
        rewards: values.reward,
        criteria: Number(values.criteria),
        start_date: start_date,
        end_date: end_date,
      },
    });

    customToast(response.message, response.success);
  } catch (err) {
    if (err.response) {
      console.log(err);
      customToast(err.response._data.message, err.response._data.success);
    }
  } finally {
    loading.value = false;
  }

  console.log(values);
};

// do something like this

const onSubmit = handleSubmit(handleCreateReferral);
</script>

<style scoped>
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #211658;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
