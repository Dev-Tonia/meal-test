<template>
  <div
    class="w-[400px] relative mx-auto bg-white flex flex-col gap-y-6 items-center justify-center text-center rounded-[6px] shadow-md p-10 lg:p-16">
    <VerifyIcon />
    <Icon @click="handleClose" role="button" name="ci:close-big" color="#292D32" size="34px"
      class="absolute top-7 right-7 bg-[#A1B1CC] p-1.5 cursor-pointer rounded-full" />
    <h3 class="text-center text-xl font-bold w-full">User Created Successfully!</h3>
    <p class="">Admin user created successfully! The user will get an email with the account credentials</p>
    <MTButton @click="handleClose" class="w-[250px]" text="Dashboard" iconName="bxl:codepen" />

  </div>
</template>

<script setup lang="ts">
import VerifyIcon from '~/assets/icons/verifyIcon.vue';

const { toggleModal } = useGlobalStore()
const { addAdminStatus } = storeToRefs(useGlobalStore())

const handleClose = () => {
  toggleModal()
  addAdminStatus.value = true
}

</script>

<style scoped></style>