<script setup lang="ts">
const navItems = [
  {
    title: "Overview",
    iconName: "streamline:dashboard-circle-solid",
    path: "/",
  },
  {
    title: "Merchants",
    iconName: "iconoir:truck",
    path: "/merchants",
  },
  { title: "Vendors", iconName: "maki:gift", path: "/vendors" },
  { title: "Customers", iconName: "ph:user", path: "/customers" },
  { title: "Payouts", iconName: "ph:money-duotone", path: "/payouts" },
  { title: "Riders", iconName: "heroicons:user-group", path: "/riders" },
  { title: "Admins", iconName: "ph:user-gear-duotone", path: "/admins" },
  { title: "Orders", iconName: "ph:package", path: "/orders" },
  {
    title: "Messages",
    iconName: "mage:message-conversation",
    path: "/messages",
  },
];
</script>
<template>
  <aside class="w-[300px] bg-white">
    <!-- Brand Logo -->
    <div class="flex items-center justify-center pt-16">
      <NuxtLink to="/" class="w-20">
        <img src="../assets/imgs/Brand-Logo.png" class="w-full" alt="" />
      </NuxtLink>
    </div>
    <div class="py-10">
      <ul class="px-5">
        <li
          class="my-2.5"
          v-for="(navItem, index) in navItems"
          :key="navItem.title"
        >
          <NuxtLink
            :to="navItem.path"
            class="py-4 rounded-md text-secondary-900 flex items-center px-10 border-l-[24px] border-white"
          >
            <div class="flex items-center space-x-4">
              <Icon :name="navItem.iconName" size="24" />
              <p class="font-bold">{{ navItem.title }}</p>
            </div>
            <div></div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
ul .router-link-exact-active {
  @apply bg-secondary  border-primary text-white;
}
li a {
  @apply hover:bg-secondary hover:border-primary hover:text-white;
}
</style>
