<script setup lang="ts">
import { onMounted } from "vue";
import "vue3-toastify/dist/index.css";
import MobileSidebar from "~/components/MobileSidebar.vue";
import Sidebar from "~/components/Sidebar.vue";

useHead({
  title: "Mealtrips",
  meta: [
    {
      name: "description",
      content: "Mealtrips Dashboard.",
    },
  ],
});

// toggle side bar on mobile screen
const showOverlay = ref(false);
function closeOverlay() {
  showOverlay.value = false;
}
function openOverlay() {
  showOverlay.value = true;
}
onMounted(async () => {});
</script>
<template>
  <div class="flex default-layout">
    <Sidebar class="hidden md:block w-[300px]" />
    <MobileSidebar
      v-motion
      :initial="{ x: -100 }"
      :visible="{ x: 0 }"
      class="md:hidden"
      :closeOverlay="closeOverlay"
      :showOverlay="showOverlay"
    />
    <main class="w-full overflow-hidden">
      <Navbar :openOverlay="openOverlay" />
      <div class="px-5 md:px-8 border min-h-[80vh]">
        <slot />
      </div>
    </main>
  </div>
</template>
