<script setup lang="ts">
// data must be an object
const { data } = defineProps(["data"]);

// Different table status
enum Status {
  Ongoing = "ongoing",
  Success = "success",
  Active = "active",
  Unavailable = "unavailable",
  Cancelled = "cancelled",
}
// Different classes depending on the status
const statusClasses = computed(() => ({
  "text-[#14532D], bg-[#DCFCE7] px-2.5 py-[3px] rounded-full":
    data === Status.Active,
  "text-[##5C2F0B], bg-[#FCF1E8] px-2.5 py-[3px] rounded-full":
    data === Status.Unavailable,
  "text-[#DC6F19]": data === Status.Ongoing,
  "text-[#4CAF50]": data === Status.Success,
  "text-[#CE3131]": data === Status.Cancelled,
}));

// const classObject = computed(() => ({
//   active: isActive.value && !error.value,
//   'text-danger': error.value && error.value.type === 'fatal'
// }))
</script>
<template>
  <td class="py-3 text-sm font-medium text-gray-900 whitespace-nowrap px-5">
    <div :class="statusClasses" class="text-center">
      <slot>{{ data }}</slot>
    </div>
  </td>
</template>

<style scoped></style>
