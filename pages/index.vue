<template>
  <data>
    <div></div>
    <div class="flex space-x-4 basis-[60%]">
      <CustomInput
        class="w-full"
        inputType="text"
        label=""
        placeholder="Search for products"
      >
        <Icon name="mi:search" size="24" class="text-gray-400" />
      </CustomInput>
      <BaseButton
        class="text-text-1"
        :btnData="{
          iconName: 'bi:filter',
          title: 'Filters',
        }"
      />
    </div>
  </data>
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
