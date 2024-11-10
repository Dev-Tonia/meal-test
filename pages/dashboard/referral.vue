<template>
  <div class="flex flex-wrap justify-between items-center py-4">
    <PageTitle page-title="Referral programs" />

    <BaseButton
      class="bg-mt-secondary text-white"
      :btnData="{
        iconName: 'ic:round-add',
        title: 'New Referral Program',
      }"
      @click="updateIsOpen"
    />
  </div>
  <div class="py-9">
    <!-- referral card -->
    <div class="bg-white shadow-xl p-6 rounded-[8px] max-w-3xl w-full">
      <!-- header -->
      <div class="flex items-center justify-between">
        <div
          class="border border-mt-secondary bg-mt-secondary/10 px-3 text-mt-secondary font-semibold text-xs rounded-full inline-block"
        >
          Users
        </div>

        <div
          class="w-10 h-6 flex items-center bg-gray-200 rounded-full p-1 cursor-pointer"
          :class="{ 'bg-green-600': isActive }"
          @click="isActive = !isActive"
        >
          <div
            class="bg-white h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out"
            :class="{ 'translate-x-4': isActive }"
          />
        </div>
      </div>

      <!-- description -->
      <div class="pt-4 flex gap-7">
        <div>
          <h4 class="font-bold font-aileron text-[#393939] text-[22px] mb-1">
            Earn 20k Cash
          </h4>
          <p class="text-[#8D8F9C] text-sm">
            Refer a total of 100 users and earn 20k directly into your wallet
          </p>
          <div class="flex items-center space-x-1 mt-2.5">
            <div
              class="border border-[#8E98A8] bg-[#F5F5F5] text-[#393939] px-3 text-sm font-medium rounded-full inline-block"
            >
              Qualified: 200
            </div>
            <div
              class="border border-[#8E98A8] bg-[#F5F5F5] text-[#393939] px-3 text-sm font-medium rounded-full inline-block"
            >
              Used: 200
            </div>
          </div>
        </div>
        <div>
          <div class="mb-2">
            <p class="text-text-1">Valid Until</p>
            <h6 class="font-bold">January 1 2025</h6>
          </div>
          <div class="flex items-center space-x-1 mt-2">
            <BaseButton
              class="border border-[#8E98A8] bg-[#F5F5F5] text-[#393939] py-1"
              :btnData="{
                iconName: 'tabler:trash',
                title: 'Delete',
              }"
            />
            <BaseButton
              class="border border-[#8E98A8] bg-[#F5F5F5] text-[#393939]"
              :btnData="{
                iconName: 'lucide:pen',
                title: 'Edit',
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal
    v-motion
    :initial="{ opacity: 0, scale: 0.9 }"
    :visible="{ opacity: 1, scale: 1 }"
    v-if="isOpen"
  >
    <ReferralNewReferral />
  </Modal>
</template>

<script setup>
import { useIsOpen } from "../composable/getIsOpen";

const isActive = ref(true);
const { isOpen, updateIsOpen } = useIsOpen();
</script>

<style lang="scss" scoped></style>
