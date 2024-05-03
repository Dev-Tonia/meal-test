<script setup lang="ts">
import { ErrorMessage } from "vee-validate";
const { label, placeholder, inputType, modelValue, name } = defineProps([
  "label",
  "icon",
  "placeholder",
  "inputType",
  "modelValue",
  "name"
]);


const emit = defineEmits(['update:modelValue', 'blur']);
</script>
<template>
  <div class="">
    <label for="" class="text-xs mb-2 inline-block" v-show="label">{{ label }} </label>
    <div class="rounded-lg border flex items-center px-2.5 py-3 gap-3">
      <!-- <Envlope /> -->
      <div>
        <slot></slot>
      </div>
      <input :type="inputType"  :placeholder="placeholder" class="input" :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" @blur="$emit('blur')" />
    </div>
    <ErrorMessage :name="name" class=" text-red-400 text-sm transition-all " />
  </div>
</template>
<style scoped>
input {
  @apply outline-none border-none w-full placeholder:text-gray-400 placeholder:text-sm placeholder:font-medium;
}
</style>
