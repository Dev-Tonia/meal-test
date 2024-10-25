<script setup lang="ts">
// data must be an object
const { data } = defineProps(["data"]);

// Different table status
enum Status {
  PendingPayment = "pending_payment",
  Success = "success",
  Active = "active",
  Unavailable = "unavailable",
  Rejected = "rejected",
  Completed = "completed",
  Accepted = "accepted",
}
// Different classes depending on the status
const statusClasses = computed(() => ({
  "text-[#14532D], bg-[#DCFCE7] px-2.5 py-[3px] rounded-full font-bold":
    data === Status.Active,
  "text-[##5C2F0B], bg-[#FCF1E8] px-2.5 py-[3px] rounded-full font-bold":
    data === Status.Unavailable,
  "text-[#DC6F19] font-bold ": data === Status.PendingPayment,
  "text-[#4CAF50] font-bold": data === Status.Success,
  "text-[#49AE4C] font-bold": data === Status.Completed,
  "text-[#CE3131] font-bold": data === Status.Rejected,
  "text-[#14532D] font-bold": data === Status.Accepted,
}));

// const classObject = computed(() => ({
//   active: isActive.value && !error.value,
//   'text-danger': error.value && error.value.type === 'fatal'
// }))
</script>
<template>
  <td
    class="py-3 text-sm text-left font-medium text-gray-900 whitespace-nowrap px-5"
  >
    <div :class="statusClasses">
      <slot>{{ data }}</slot>
    </div>
  </td>
</template>

<style scoped></style>
