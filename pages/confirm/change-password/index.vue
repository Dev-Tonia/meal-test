<template>
  <Modal v-if="true">
    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :visible="{ opacity: 1, scale: 1 }"
      class="w-[500px] relative h-fite mx-auto bg-white rounded-[4px] shadow-md px-5 py-10 sm:p-16 space-y-7"
    >
      <Icon
        role="button"
        name="ci:close-big"
        color="#292D32"
        size="34px"
        class="absolute top-5 right-10 bg-[#A1B1CC] p-1.5 cursor-pointer rounded-full"
      />
      <h2 class="text-center text-[#211658] text-3xl font-medium">
        Change Password
      </h2>
      <form
        :onSubmit="handleSubmit(handleAddAdmin)"
        class="space-y-5 md:space-y-7"
      >
        <div class="space-y-2 pb-4 md:space-y-3">
          <CustomInput
            input-type="text"
            v-model="newPassword"
            v-bind="newPasswordProps"
            label="New Password"
            name="newPassword"
          />
          <CustomInput
            input-type="text"
            v-model="confirmPassword"
            v-bind="confirmPasswordProps"
            label="Confirm Password"
            name="confirmPassword"
          />
        </div>
        <pre class="bg-red-500 w-full overflow-y-scroll">{{
          route.query.token
        }}</pre>
        <MTButton
          :load-state="loading"
          text="Change Password"
          iconName="bxl:codepen"
        />
      </form>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const route = useRoute();

const router = useRouter();

// const params =  RouteParams()

// const token = router.

import { toTypedSchema } from "@vee-validate/zod";
import { storeToRefs } from "pinia";
import { useForm } from "vee-validate";
import { z } from "zod";
import { useGlobalStore } from "../../../stores/globalStore";

const { loading } = storeToRefs(useGlobalStore());
const { toggleModal } = useGlobalStore();

const schema = toTypedSchema(
  z
    .object({
      newPassword: z
        .string({
          required_error: "New Password is required",
        })
        .min(2, {
          message: "Password is too short",
        }),
      confirmPassword: z
        .string({
          required_error: "Confirm Password is required",
        })
        .min(2, {
          message: "Confirm Password is required",
        }),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }),
);
const { defineField, handleSubmit } = useForm({
  validationSchema: schema,
});

const [newPassword, newPasswordProps] = defineField("newPassword");
const [confirmPassword, confirmPasswordProps] = defineField("confirmPassword");

interface changePasswordInterface {
  newPassword: string;
  confirmPassword: string;
}
const handleAddAdmin = (data: changePasswordInterface) => {
  console.log(data);
};
</script>
