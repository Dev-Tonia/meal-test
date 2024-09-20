<template>
  <button :disabled="loadState"
    :class="['bg-mt-secondary w-full justify-center flex items-center disabled:cursor-not-allowed space-x-3 py-3 max-w-full text-white border-l-[18px] rounded border-l-mt-primary', props.class]">
    <LoadingIcon v-if="loadState" />
    <template v-else>
      <div>
        <Icon :name="iconName" color="white" size="18px" />
      </div>
      <span class="font-semibold">{{ text }}</span>

    </template>


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
  loadState: {
    type: Boolean,
    required: false
  },
  class: {
    type: String,
    required: false,
  },
});
</script>
