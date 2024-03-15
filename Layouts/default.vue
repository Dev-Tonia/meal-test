<script setup lang="ts"></script>
<template>
  <div class="flex space-x-3">
    <div class="sticky top-0 left-0 h-full">
      <Sidebar class="h-screen overflow-y-auto" />
    </div>
    <main class="w-full border">
      <div>
        <slot />
      </div>
    </main>
  </div>
</template>
