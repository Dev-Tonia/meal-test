<template>
  <div
    class="w-[324px] p-7 shadow-md px-8 h-[120px] flex flex-col justify-between custom-radius"
    :class="[variant === 'primary' ? 'bg-[#FCF1E8]' : 'bg-[#E8EEED]']"
  >
    <!-- card  title -->
    <h2 class="uppercase text-[#71717A] text-sm">
      <slot name="title"></slot>
    </h2>

    <div class="flex items-end justify-between">
      <!-- price -->
      <h3
        class="text-xl font-bold"
        :class="[variant === 'primary' ? 'text-[#DC6F19]' : 'text-[#165049]']"
      >
        <slot name="price"></slot>
      </h3>
      <!-- stats -->
      <div
        class="space-x-1"
        :class="[!positive ? 'text-[#CE3131]' : 'text-[#22C55E]']"
      >
        <!-- negative or positive -->

        <span>{{ positive ? "+" : "-" }}</span>

        <!-- stat number -->
        <span>
          <slot name="statNumber"></slot>
        </span>
        <!-- stat direction icon -->
        <!-- change this to an icon -->
        <span>{{ positive ? "&#8593;" : "&#8595;" }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  positive: {
    type: Boolean,
    default: true,
  },
});
</script>
<style scoped>
.custom-radius {
  border-radius: 8px;
}
</style>
