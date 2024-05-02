<script setup lang="ts">
const navItems = [
  {
    title: "Overview",
    iconName: "streamline:dashboard-circle-solid",
    path: "/dashboard",
  },
  {
    title: "Merchants",
    iconName: "iconoir:truck",
    path: "/dashboard/merchants",
  },
  { title: "Vendors", iconName: "maki:gift", path: "/dashboard/vendors" },
  { title: "Customers", iconName: "ph:user", path: "/dashboard/customers" },
  { title: "Payouts", iconName: "ph:money-duotone", path: "/dashboard/payouts" },
  { title: "Riders", iconName: "heroicons:user-group", path: "/dashboard/riders" },
  { title: "Admins", iconName: "ph:user-gear-duotone", path: "/dashboard/admins" },
  { title: "Orders", iconName: "ph:package", path: "/dashboard/orders" },
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
        <li class="my-2.5" v-for="(navItem, index) in navItems" :key="navItem.title">
          <NuxtLink :to="navItem.path"
            class="py-4 rounded-md text-mt-secondary-900 flex items-center px-10 border-l-[24px] border-white">
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
  @apply bg-mt-secondary border-mt-primary text-white;
}

li a {
  @apply hover:bg-secondary hover:border-primary hover:text-white;
}
</style>
