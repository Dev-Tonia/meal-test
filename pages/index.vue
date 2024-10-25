<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { Form, useForm } from "vee-validate";
import { z } from "zod";
import { customToast } from "~/composables/utils";
import { useAuthStore } from "~/stores/authStore";
import type { UserPayloadInterface } from "~/types/user";

definePageMeta({
  layout: "login",
});

const { authenticateUser } = useAuthStore();
const { loading } = storeToRefs(useAuthStore());
const schema = toTypedSchema(
  z.object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Email is invalid",
      }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6, {
        message: "Password must be at least 6 characters",
      }),
  })
);
const { defineField, handleSubmit } = useForm({
  validationSchema: schema,
});

const [email, emailProps] = defineField("email");
const [password, passwordProps] = defineField("password");

const handleLogin = async (data: UserPayloadInterface) => {
  const res = await authenticateUser(data);
  customToast(res.message, res.success);
};
</script>

<template>
  <Toaster class="bg-mt-primary" />
  <div class="grid md:grid-cols-2">
    <div
      class="bg-gradient-to-br relative p-24 font-bold hidden xl:p-32 md:flex flex-col justify-between from-[#FF792E] min-h-screen to-[#FB9600]"
    >
      <NuxtImg
        src="/imgs/bigCircle.svg"
        class="absolute -right-6 -rotate-[20deg] bottom-0"
      />
      <NuxtImg src="/imgs/MTlogo.svg" height="80px" width="80px" class="" />

      <h1 class="text-5xl text-white uppercase justify-self-center">
        Welcome back to <br />
        <span class="text-mt-secondary mt-4 inline-block">mealtrips</span>
      </h1>
      <div />
      <NuxtImg
        src="/imgs/bigCircle.svg"
        class="absolute -left-20 rotate-[180deg] top-0"
      />
    </div>
    <div
      class="flex py-10 md:py-0 px-8 md:px-12 lg:px-24 xl:px-32 items-center"
    >
      <div class="w-full">
        <div class="space-y-4 mb-12">
          <h2 class="text-4xl">Login</h2>
          <p class="text-sm text-gray-600">Login to your account</p>
        </div>
        <form :onSubmit="handleSubmit(handleLogin)" class="space-y-10">
          <div class="space-y-4">
            <CustomInput
              input-type="email"
              v-model="email"
              v-bind="emailProps"
              label="Email"
              name="email"
            />

            <CustomInput
              input-type="password"
              label="Password"
              v-model="password"
              v-bind="passwordProps"
              name="password"
            />

            <div class="flex w-full text-sm items-center justify-between mt-6">
              <div class="flex items-center space-x-2">
                <input id="remember" type="checkbox" />
                <label class="cursor-pointer" for="remember">Remember me</label>
              </div>
              <div>
                <NuxtLink
                  to="#"
                  class="text-[#001AA5] hover:underline transition-all"
                  >Forgot Password?</NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="max-w-[275px]">
            <MTButton
              :load-state="loading"
              text="Log in"
              iconName="bxl:codepen"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
