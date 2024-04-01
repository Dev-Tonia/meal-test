<script setup lang="ts">
// data must be an object
const { data } = defineProps(["data"]);

// Different table status
enum Status {
  Ongoing = "Ongoing",
  Success = "Success",
  Active = "Active",
  Unavailable = "Unavailable",
  Cancelled = "Cancelled",
}
// Different classes depending on the status
const statusClasses = computed(() => ({
  "text-[#14532D], bg-[#DCFCE7] px-2.5 py-[3px] rounded-full":
    data.Status === Status.Active,
  "text-[##5C2F0B], bg-[#FCF1E8] px-2.5 py-[3px] rounded-full":
    data.Status === Status.Unavailable,
  "text-[#DC6F19]": data.Status === Status.Ongoing,
  "text-[#4CAF50]": data.Status === Status.Success,
  "text-[#CE3131]": data.Status === Status.Cancelled,
}));

// const classObject = computed(() => ({
//   active: isActive.value && !error.value,
//   'text-danger': error.value && error.value.type === 'fatal'
// }))
</script>
<template>
  <td
    class="py-3 text-sm font-medium text-gray-900 whitespace-nowrap px-5"
    v-for="(value, key) in data"
    :key="key"
  >
    <div v-if="key === 'Status'" :class="statusClasses" class="text-center">
      <slot>{{ value }}</slot>
    </div>
    <div v-else>
      {{ value }}
    </div>
  </td>
</template>

<style scoped></style>
