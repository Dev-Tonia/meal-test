<script setup lang="ts">
import { ErrorMessage } from "vee-validate";

const {
  label,
  placeholder,
  modelValue,
  name,
  autoGenerate = false,
} = defineProps([
  "label",
  "placeholder",
  "modelValue",
  "name",
  "autoGenerate",
]);

const emit = defineEmits(["update:modelValue", "blur"]);

const handleChange = () => {
  emit("update:modelValue", generateContent());
};

// Example function to generate content for textarea
const generateContent = () => {
  return "Generated content"; // Replace this with your actual content generation logic
};
</script>

<template>
  <div class="w-full pb-1.5 relative">
    <label for="" class="text-sm mb-2 inline-block" v-show="label">
      {{ label }}
    </label>
    <div class="rounded-[5px] relative border flex items-start px-2.5 py-3 gap-y-3">
      <div>
        <slot></slot>
      </div>
      <textarea :placeholder="placeholder" class="textarea" :value="modelValue" @input="
        $emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)
        " @blur="$emit('blur')" />

    </div>
    <ErrorMessage :duration="0.5" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :name="name"
      class="text-red-400 absolute  left-0 text-[13px] transition-all" />

  </div>
</template>

<style scoped>
textarea {
  @apply outline-none border-none w-full placeholder:text-gray-400 placeholder:text-sm placeholder:font-medium;
  resize: none;
  /* Prevent resizing if desired */
  min-height: 100px;
  /* Set a minimum height */
}
</style>
