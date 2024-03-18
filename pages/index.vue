<script setup lang="ts"></script>
<template>
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
