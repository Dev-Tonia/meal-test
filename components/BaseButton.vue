<script setup lang="ts">
interface IButtonData {
  title: string;
  iconName?: string | null;
  iconColor?: string;
}

const props = defineProps({
  btnData: {
    type: Object as PropType<IButtonData>,
    required: true,
  },
});
const { btnData } = props;
const emit = defineEmits(["click"]);
const click = () => emit("click");
</script>
<template>
  <!-- add background color and border where needed-->
  <button
    @click="click"
    class="px-4 py-2.5 shadow overflow-hidden shadow-[#1018280D] btn"
  >
    <div
      class="flex gap-2 items-center"
      :class="{ 'justify-center': btnData.iconName === null }"
    >
      <Icon
        v-if="btnData.iconName"
        :name="btnData.iconName"
        :color="btnData.iconColor"
        size="30"
      />
      <span> {{ btnData.title }} </span>
      <!-- Slot for icon in the right -->

      <slot />
    </div>
  </button>
</template>
<style scoped>
.btn {
  border-radius: 8px;
}
</style>
