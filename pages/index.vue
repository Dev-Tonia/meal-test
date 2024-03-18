
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
  <BaseButton
    :btnData="{
      iconName: 'bi:filter',
      iconColor: 'green',
      title: 'Filter',
    }"
  />

  <BaseButton
    :btnData="{
      iconName: 'fluent:mail-16-regular',
      title: 'Send Broadcast',
    }"
    class="bg-secondary-50 text-secondary"
  />
  <BaseButton
    :btnData="{
      iconName: 'mingcute:arrow-left-line',
      title: 'Prev',
    }"
  />
  <BaseButton :btnData="{ title: 'No Icon' }" class="!bg-primary text-white" />
  <BaseButton :btnData="{ title: 'Next' }">
    <Icon name="mingcute:arrow-right-line" size="30"
  /></BaseButton>
</template>

