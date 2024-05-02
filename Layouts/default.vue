
<script setup lang="ts">
const store = useAuthStore()
const route = useRoute()

onMounted(() => {
  store.getUserProfile()
})
// const isAuth = useCookie('userToken')
// console.log("🚀 ~ isAuth:", isAuth)

</script>

<template>
  <div class="flex space-x-3">
    <div class="sticky top-0 left-0 h-full">
      <Sidebar class="h-screen overflow-y-auto" />
    </div>
    <main class="w-full overflow-hidden">
      <Navbar />
      <div class="px-8 border">
        <slot />
      </div>
    </main>
  </div>
</template>

