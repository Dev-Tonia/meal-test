<template>
  <div class="flex justify-between py-3">
    <div class="flex space-x-2 w-[500px]">
      <CustomInput
        class="w-full"
        inputType="text"
        label=""
        placeholder="Search for customer"
        v-model="model"
      >
        <Icon name="mi:search" size="24" class="text-gray-400 mr-1.5" />
      </CustomInput>
      <button
        class="border rounded-[4px] size-fit py-[13px] text-gray-500 px-6"
      >
        Filters
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const model = defineModel();
</script>
