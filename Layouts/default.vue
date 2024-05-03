<script setup lang="ts">
const store = useAuthStore()

onMounted(() => {
  store.getUserProfile()
})

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
  <div class="flex space-x-3">
    <div class="sticky top-0 left-0 h-full">
      <Sidebar class="h-screen overflow-y-auto" />
    </div>

    <div class="flex space-x-3">
      <!-- <div class="sticky top-0 left-0 h-full hidden md:block"> -->
      <Sidebar class="hidden md:block w-[300px]" />
      <!-- </div> -->
      <MobileSidebar class="md:hidden" :closeOverlay="closeOverlay" :showOverlay="showOverlay" />
      <main class="w-full overflow-hidden">
        <Navbar :openOverlay="openOverlay" />
        <div class="px-8 border">
          <slot />
        </div>
      </main>

    </div>
    
  </div>
</template>
