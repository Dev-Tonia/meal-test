<template>
  <div class="grid grid-cols-2 ">
    <div
      class="bg-gradient-to-br relative p-24 font-bold xl:p-32 flex flex-col justify-between from-[#FF792E] min-h-screen to-[#FB9600]">
      <NuxtImg src="/imgs/bigCircle.svg" class="absolute -right-6 -rotate-[20deg] bottom-0 " />
      <NuxtImg src="/imgs/MTlogo.svg" height="80px" width="80px" class="" />

      <h1 class="text-5xl text-white uppercase justify-self-center">Welcome back to <br /> <span
          class="text-secondary  mt-4 inline-block ">mealtrips</span> </h1>
      <div />
      <NuxtImg src="/imgs/bigCircle.svg" class="absolute -left-20 rotate-[180deg] top-0 " />

    </div>
    <div class="flex  px-24 xl:px-32 items-center">
      <div class="w-full ">
        <div class="space-y-4 mb-12">
          <h2 class="text-4xl">Login</h2>
          <p class="text-sm text-gray-600 ">Login to your account</p>
        </div>
        <form class="space-y-10">
          <div class="space-y-4">
            <CustomInput label="Email" />
            <CustomInput label="Password" />
            <!-- <BaseButton :btnData="{ title: 'Login' }" /> -->
            <div class="flex w-full text-sm  items-center justify-between mt-6">
              <div class="flex  items-center space-x-2">
                <input id="remember" type="checkbox" />
                <label class="cursor-pointer" for="remember">Remember me</label>
              </div>
              <div>
                <NuxtLink to="#" class="text-[#001AA5] hover:underline transition-all">Forgot Password?</NuxtLink>
              </div>
            </div>
          </div>
          <MTButton text="Login" iconName="bxl:codepen" />
        </form>

      </div>
    </div>
  </div>
</template>
<script setup>

</script>

<style lang="scss" scoped></style>