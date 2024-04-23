<script setup lang="ts">
const route = useRoute();
const isLoginRoute = ref(route.fullPath.includes("/login"));
const isHomePage = ref(false);
console.log(route.path);
watch(
  () => route.path,
  (newPath) => {
    isHomePage.value = newPath === "/";
  }
);
</script>
<template>
  <div v-if="isLoginRoute" class="min-h-screen">
    <slot />
  </div>
  <div v-else class="flex space-x-3">
    <div class="sticky top-0 left-0 h-full">
      <Sidebar class="h-screen overflow-y-auto" />
    </div>
    <main class="w-full overflow-hidden">
      <Navbar :isHomePage="isHomePage" />
      <div class="px-8 border">
        <slot />
      </div>
    </main>
  </div>
</template>
