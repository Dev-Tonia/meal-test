<script setup lang="ts">
import 'vue3-toastify/dist/index.css';
useHead({
  title: "Mealtrips",
  meta: [{ name: "description", content: "Mealtrips Dashboard." }],
});


const { getCurrentUser } = useAuthStore();

// toggle side bar on mobile screen
const showOverlay = ref(false);
function closeOverlay() {
  showOverlay.value = false;
}
function openOverlay() {
  showOverlay.value = true;
}
onMounted(async () => {
  await getCurrentUser();
})
</script>

<template>
  <div class="flex select-none">
    <!-- <div class="sticky top-0 left-0 h-full hidden md:block"> -->
    <Sidebar class="hidden md:block w-[300px]" />
    <!-- </div> -->
    <MobileSidebar v-motion :initial="{ x: -100 }" :visible="{ x: 0 }" class="md:hidden" :closeOverlay="closeOverlay"
      :showOverlay="showOverlay" />
    <main class="w-full overflow-hidden">
      <Navbar :openOverlay="openOverlay" />
      <div class="px-5 md:px-8 border min-h-[80vh]">
        <slot />
      </div>
    </main>
  </div>
</template>
