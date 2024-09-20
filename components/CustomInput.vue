<script setup lang="ts">
import { ErrorMessage } from "vee-validate";
const { label, placeholder, inputType, modelValue, name, autoGenerate = false } = defineProps([
  "label",
  "icon",
  "placeholder",
  "inputType",
  "modelValue",
  "name",
  "autoGenerate"
]);


const emit = defineEmits(['update:modelValue', 'blur']);
const handleChange = () => {
  emit('update:modelValue', generatePassword());
}
</script>
<template>
  <div class="w-full pb-1.5 relative">
    <label for="" class="text-sm mb-2 inline-block" v-show="label">{{ label }} </label>
    <div class="rounded-[5px] relative border flex items-center px-2.5  py-3 gap-y-3">
      <div>
        <slot></slot>
      </div>
      <input :type="inputType" :placeholder="placeholder" class="input " :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" @blur="$emit('blur')" />
      <div @click="handleChange" v-if="autoGenerate"
        class="absolute cursor-pointer top-1/2 text-sm  bg-mt-secondary text-white rounded-full px-3 sm:px-5 py-2 -translate-y-1/2 right-3">
        Generate
      </div>
    </div>

    <ErrorMessage :duration="0.5" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :name="name"
      class=" text-red-400  absolute  top-[80px] left-0 text-[13px] transition-all " />
  </div>
</template>
<style scoped>
input {
  @apply outline-none border-none w-full placeholder:text-gray-400 placeholder:text-sm placeholder:font-medium;
}
</style>
