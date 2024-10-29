<template>
  <div
    class="w-[700px] relative h-fite mx-auto bg-white rounded-[4px] shadow-md px-5 py-10 sm:p-16 space-y-7"
  >
    <Icon
      @click="closeModal"
      role="button"
      name="ci:close-big"
      color="#292D32"
      size="34px"
      class="absolute top-10 right-10 bg-[#A1B1CC] p-1.5 cursor-pointer rounded-full"
    />
    <h2 class="text-center text-[#211658] text-3xl font-medium">
      {{ isEdit ? "Edit Admin" : "Add Admin" }}
    </h2>
    <form
      :onSubmit="handleSubmit(handleAddAdmin)"
      class="space-y-5 md:space-y-10"
    >
      <div class="space-y-2 pb-4 md:space-y-3">
        <CustomInput
          :value="selectedAdminUser.firstname"
          input-type="text"
          v-model="firstName"
          v-bind="firstNameProps"
          label="First Name"
          name="firstName"
        />
        <CustomInput
          :value="selectedAdminUser.lastname"
          input-type="text"
          v-model="lastName"
          v-bind="lastNameProps"
          label="Last Name"
          name="lastName"
        />
        <CustomInput
          :value="selectedAdminUser.email"
          input-type="email"
          v-model="email"
          v-bind="emailProps"
          label="Email"
          name="email"
        />
        <CustomSelect
          :value="selectedAdminUser.role"
          label="Role"
          v-model="role"
          v-bind="roleProps"
          name="role"
        />
        <CustomInput
          label="Password"
          v-model="password"
          v-bind="passwordProps"
          name="password"
          :auto-generate="true"
          :optional="isEdit"
        />
      </div>
      <MTButton
        :load-state="loading"
        text="Create Admin"
        iconName="bxl:codepen"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import axios from "axios";
import { useForm } from "vee-validate";
import { z } from "zod";
import authHeader from "~/services/authHeader";

const { toggleModal, getSelectedAdminUser } = useGlobalStore();
const { loading, addAdminStatus, selectedAdminUser } =
  storeToRefs(useGlobalStore());

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false,
  },
});

interface subAdminPayloadInterface {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  role: string;
}

const schema = toTypedSchema(
  z.object({
    firstName: z
      .string({
        required_error: "First name is required",
      })
      .min(2, {
        message: "First name is required",
      }),
    lastName: z
      .string({
        required_error: "Last name is required",
      })
      .min(2, {
        message: "Last name is required",
      }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Email is invalid",
      }),
    password: props.isEdit
      ? z.string().optional()
      : z
          .string({
            required_error: "Password is required",
          })
          .min(6, {
            message: "Password must be at least 6 characters long",
          }),
    role: z
      .string({
        required_error: "Role is required",
      })
      .min(2, {
        message: "Role is required",
      }),
  }),
);

const { defineField, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: props.isEdit
    ? {
        firstName: selectedAdminUser.value?.firstname,
        lastName: selectedAdminUser.value?.lastname,
        email: selectedAdminUser.value?.email,
        role: selectedAdminUser.value?.role,
      }
    : undefined,
});

const [firstName, firstNameProps] = defineField("firstName");
const [lastName, lastNameProps] = defineField("lastName");
const [email, emailProps] = defineField("email");
const [password, passwordProps] = defineField("password");
const [role, roleProps] = defineField("role");

const closeModal = () => {
  toggleModal();
  selectedAdminUser.value = {
    user_id: "",
    firstname: "",
    lastname: "",
    email: "",
    role: "",
  };
};
const handleAddAdmin = async (data: subAdminPayloadInterface) => {
  loading.value = true;
  try {
    if (props.isEdit) {
      const res = await axios.put(
        `https://api-staging.mealtrips.com/api/admin/admin-users/edit-admin`,
        {
          user_id: selectedAdminUser.value?.user_id,
          firstname: data.firstName,
          lastname: data.lastName,
          email: data.email,
          admin_role: data.role,
          callBackUrl: "https://api-staging.mealtrips.com/verifyNewAdminEmail",
        },
        {
          headers: authHeader(),
        },
      );
      addAdminStatus.value = false;
      selectedAdminUser.value = {
        user_id: "",
        firstname: "",
        lastname: "",
        email: "",
        role: "",
      };
    } else {
      const res = await axios.post(
        `https://api-staging.mealtrips.com/api/admin/admin-users/invite-admin`,
        {
          firstname: data.firstName,
          lastname: data.lastName,
          email: data.email,
          admin_role: data.role,
          password: data.password,
          callBackUrl: "https://api-staging.mealtrips.com/verifyNewAdminEmail",
        },
        {
          headers: authHeader(),
        },
      );
      addAdminStatus.value = false;
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      customToast(error.response.data.message, false);
    } else {
      customToast("An unexpected error occurred", false);
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped></style>
