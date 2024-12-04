<script setup lang="ts">
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
        <NuxtPage />
      </div>
    </main>
  </div>
</template>
