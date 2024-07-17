<template>
  <div class="grid md:grid-cols-2">
    <div
      class="bg-gradient-to-br relative p-24 font-bold hidden xl:p-32 md:flex flex-col justify-between from-[#FF792E] h-screen to-[#FB9600]"
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
    <div class="flex px-12 md:px-24 xl:px-32 items-center">
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
          <MTButton
            :text="store.isLoading ? 'loading...' : 'Log in'"
            iconName="bxl:codepen"
          />
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { toTypedSchema } from "@vee-validate/zod";
import { Form, useForm } from "vee-validate";
import { z } from "zod";
definePageMeta({
  layout: "login",
});
// const layout = 'login'
const loading = ref(false);
const store = useAuthStore();
const router = useRouter();
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

const handleLogin = async (data) => {
  try {
    store.login(data);
    router.push("/");
  } catch (error) {
    console.log("🚀 ~ handleLogin ~ error:", error);
  }
};
</script>

<style lang="scss" scoped></style>
