<script setup lang="ts">
import { ErrorMessage } from "vee-validate";
import { ref } from "vue";
const { assignableRoles } = storeToRefs(useGlobalStore());

const { label, modelValue, name } = defineProps([
  "label",
  "icon",
  "placeholder",
  "inputType",
  "modelValue",
  "name",
]);

const openDropdown = ref(false);
const handleClick = () => {
  openDropdown.value = !openDropdown.value;
};
const emit = defineEmits(["update:modelValue", "blur"]);

const handleSelect = (role: string) => {
  emit("update:modelValue", role);
  openDropdown.value = false;
};
</script>
<template>
  <div class="w-full relative pb-1.5">
    <label for="" class="text-sm mb-2 inline-block" v-show="label"
      >{{ label }}
    </label>
    <div
      class="rounded-[5px] border relative items-center cursor-pointer px-2.5 gap-3"
    >
      <div
        @click="handleClick"
        class="absolute w-full bg-transparent z-10 h-12 left-0"
      />
      <div>
        <slot></slot>
      </div>
      <input
        disabled
        type="text"
        placeholder="Select role"
        class="input capitalize cursor-pointer disabled:bg-transparent w-full"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        @blur="$emit('blur')"
      />
      <span class="absolute top-1/2 -translate-y-1/2 right-3">
        <Icon
          v-motion
          :initial="{ y: 4 }"
          :enter="{ y: 0 }"
          v-if="!openDropdown"
          name="lucide:chevron-down"
          color="gray"
          size="18px"
        />
        <Icon
          v-motion
          :initial="{ y: 4 }"
          :enter="{ y: 0 }"
          v-else
          name="lucide:chevron-up"
          color="gray"
          size="18px"
        />
      </span>

      <div
        v-motion="{
          initial: {
            y: 5,
            opacity: 0,
          },
          enter: {
            y: 0,
            opacity: 1,
          },
        }"
        v-if="openDropdown"
        class="w-full absolute border z-10 top-[50px] left-0 bg-white rounded-[5px] shadow-md"
      >
        <ul
          class="flex flex-col gap-y-2"
          v-for="role in assignableRoles"
          :key="role"
        >
          <li
            @click="handleSelect(role)"
            class="border-b hover:bg-gray-100 hover:transition-all p-3.5 cursor-pointer capitalize text-sm text-[#041211] border-mt-secondary-50"
          >
            {{ role }}
          </li>
        </ul>
      </div>
    </div>

    <ErrorMessage
      :duration="0.5"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :name="name"
      class="text-red-400 absolute top-[80px] left-0 text-[13px] transition-all"
    />
  </div>
</template>
<style scoped>
input {
  @apply outline-none border-none w-full py-3 placeholder:text-gray-400 placeholder:text-sm placeholder:font-medium;
}
</style>
