<script setup lang="ts">
const { label, placeholder, inputType } = defineProps([
  "label",
  "icon",
  "placeholder",
  "inputType",
]);
</script>
<template>
  <div class="form-group">
    <label for="" class="text-xs" v-show="label"> {{ label }} </label>
    <div class="rounded-lg border flex items-center px-2.5 py-3 gap-3">
      <!-- <Envlope /> -->
      <div>
        <slot></slot>
      </div>
      <input :type="inputType" :placeholder="placeholder" class="" />
    </div>
  </div>
</template>
<style scoped>
input {
  @apply outline-none border-none w-full placeholder:text-gray-400 placeholder:text-sm placeholder:font-medium;
}
</style>
