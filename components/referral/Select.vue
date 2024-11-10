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
</script>

<template>
  <Select>
    <SelectTrigger :isArrow="false">
      <SelectValue placeholder="Select a fruit" />
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
</template>
