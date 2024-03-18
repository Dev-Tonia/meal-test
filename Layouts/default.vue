<script setup lang="ts"></script>
<template>
  <div class="flex space-x-3">
    <div class="sticky top-0 left-0 h-full">
      <Sidebar class="h-screen overflow-y-auto" />
    </div>
    <main class="w-full">
      <Navbar />
      <div class="px-8 border">
        <slot />
      </div>
    </main>
  </div>
</template>
