<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "radix-vue";

const props = defineProps({
  placeholder: {
    type: String,
  },
  label: {
    type: String,
  },
});
</script>

<template>
  <div class="">
    <label class="text-sm mb-2 inline-block">{{ label }}</label>
    <Select>
      <SelectTrigger class="bg-[#F2F2F2] border border-[#E8EAED] py-5">
        <SelectValue :placeholder="placeholder" />
        <Icon name="lsicon:down-filled" class="w-4 h-4" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <!-- <SelectLabel>Fruits</SelectLabel> -->
          <!-- <SelectItem value="apple"> Apple </SelectItem> -->
          <slot />
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
