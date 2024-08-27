<template>
  <button
    class="bg-mt-secondary flex items-center space-x-3 pl-8 py-3 max-w-full text-white border-l-[18px] rounded border-l-mt-primary"
  >
    <div>
      <Icon :name="iconName" color="white" size="18px" />
    </div>
    <span class="">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: false,
  },
});

const { text } = props;
</script>
