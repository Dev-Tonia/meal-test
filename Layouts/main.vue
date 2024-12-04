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
  <div class="flex">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
      cupiditate fuga ullam accusantium perferendis nesciunt eligendi, quibusdam
      aspernatur alias molestiae accusamus adipisci ex corporis aliquid facilis
      assumenda voluptatum iste. Tempora.
    </p>
    <Sidebar class="hidden md:block w-[300px]" />
    <MobileSidebar
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
