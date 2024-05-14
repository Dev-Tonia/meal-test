<script setup lang="ts">
const store = useAuthStore();
useHead({
  title: 'Mealtrips',
  meta: [
    { name: 'description', content: 'Mealtrips Dashboard.' }
  ]
})
onMounted(() => {
  store.getUserProfile();
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
  <div class="flex ">
    <!-- <div class="sticky top-0 left-0 h-full hidden md:block"> -->
    <Sidebar class="hidden md:block w-[300px]" />
    <!-- </div> -->
    <MobileSidebar class="md:hidden" :closeOverlay="closeOverlay" :showOverlay="showOverlay" />
    <main class="w-full overflow-hidden">
      <Navbar :openOverlay="openOverlay" />
      <div class=" border min-h-[80vh]">
        <slot />
      </div>
    </main>
  </div>
</template>
