<script setup>
import {
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  Select,
} from "@/components/ui/select";
import { ErrorMessage, useField } from "vee-validate";

const props = defineProps({
  placeholder: {
    type: String,
    default: "Select an option",
  },
  label: {
    type: String,
  },
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
  },
  // Add name prop
  name: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

// Initialize field with vee-validate
const { value: fieldValue, errorMessage, handleBlur } = useField(props.name);

// Using computed property for two-way binding
const selectedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
    fieldValue.value = value; // Update the field value for validation
  },
});
</script>

<template>
  <div class="relative">
    <label class="text-sm mb-2 inline-block">{{ label }}</label>
    <Select v-model="selectedValue">
      <SelectTrigger class="bg-[#F2F2F2] border border-[#E8EAED] py-5">
        <SelectValue :placeholder="placeholder"> </SelectValue>
        <Icon name="lsicon:down-filled" class="w-4 h-4" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <slot />
        </SelectGroup>
      </SelectContent>
    </Select>

    <ErrorMessage
      :name="name"
      v-motion
      :duration="0.5"
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      class="text-red-400 absolute top-[80px] left-0 text-[13px] transition-all"
    />

    <p>{{ selectedValue }} hello</p>
  </div>
</template>
