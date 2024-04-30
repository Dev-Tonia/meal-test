<script setup lang="ts">
const route = useRoute();
const isLoginRoute = ref(route.fullPath.includes("/login"));
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
  <div v-if="isLoginRoute" class="min-h-screen">
    <slot />
  </div>
  <div v-else class="flex space-x-3">
    <div class="sticky top-0 left-0 h-full hidden md:block">
      <Sidebar class="h-screen overflow-y-auto w-[300px]" />
    </div>
    <MobileSidebar
      class="md:hidden"
      :closeOverlay="closeOverlay"
      :showOverlay="showOverlay"
    />
    <main class="w-full overflow-hidden">
      <Navbar :openOverlay="openOverlay" />
      <div class="px-8 border">
        <slot />
      </div>
    </main>
  </div>
</template>
