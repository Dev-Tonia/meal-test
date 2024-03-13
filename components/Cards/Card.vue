<template>
  <div class="w-[324px] p-7 px-8 h-[120px] flex flex-col justify-between rounded-lg"
    :class="[variant === 'primary' ? 'bg-[#FCF1E8]' : 'bg-[#E8EEED]']">
    <!-- card  title -->
    <h2 class="uppercase text-[#71717A] text-sm ">
      <slot name="title"></slot>
    </h2>

    <div class="flex items-end justify-between">
      <!-- price -->
      <h3 class="text-xl font-bold" :class="[variant === 'primary' ? 'text-[#DC6F19]' : 'text-[#165049]']">
        <slot name="price"></slot>
      </h3>

      <!-- stats -->
      <div class=" space-x-1 text-[#22C55E] ">
        <!-- negative or positivw -->
        <span>+</span>
        <!-- stat number -->
        <span>
          <slot name="statNumber"></slot>
        </span>
        <!-- stat direction icon -->
        <span>&#8593;</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" >
const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
})
</script>
