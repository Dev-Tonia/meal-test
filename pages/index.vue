<template>
  <div class="p-20 flex gap-5">
    <Cards-Card :positive="false">
      <template #title>Today's sales</template>
      <template #price>$12,345</template>
      <template #statNumber>36</template>
    </Cards-Card>
    <Cards-Card variant="secondary">
      <template #title>Vendor</template>
      <template #price>80</template>
      <template #statNumber>36</template>
    </Cards-Card>
    <Cards-Card :positive="false">
      <template #title>Total Order</template>
      <template #price>100</template>
      <template #statNumber>8</template>
    </Cards-Card>
  </div>
</template>
<script setup>
</script>

