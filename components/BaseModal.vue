<!-- BaseModal.vue -->
<template>
  <div
    v-motion
    :initial="{ opacity: 0, scale: 0.9 }"
    :visible="{ opacity: 1, scale: 1 }"
    v-if="isOpen"
    class="fixed inset-0 bg-mt-secondary-50 flex items-center justify-center z-50"
  >
    <div
      class="bg-white rounded-lg p-6 pb-16 w-full pt-4 flex gap-y-3 flex-col max-w-xl relative"
    >
      <!-- Close Button -->
      <button
        @click="emit('close')"
        class="text-gray-500 self-end hover:text-gray-700"
      >
        <Icon
          name="ci:close-big"
          color="#292D32"
          size="28px"
          class="bg-[#A1B1CC] p-1.5 cursor-pointer rounded-full"
        />
      </button>

      <div class="flex-1 w-full">
        <!-- Modal Title -->
        <h2 class="text-2xl text-mt-secondary font-semibold mb-6 text-center">
          {{ title }}
        </h2>

        <!-- Slot for modal content -->
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean;
  title: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>
