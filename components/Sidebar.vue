<script setup lang="ts">
const navItems = [
  {
    title: "Overview",
    iconName: "streamline:dashboard-circle-solid",
    path: "/dashboard",
  },
  { title: "Vendors", iconName: "maki:gift", path: "/dashboard/vendors" },
  { title: "Customers", iconName: "ph:user", path: "/dashboard/customers" },
  {
    title: "Payouts",
    iconName: "ph:money-duotone",
    path: "/dashboard/payouts",
  },
  {
    title: "Riders",
    iconName: "heroicons:user-group",
    path: "/dashboard/riders",
  },
  {
    title: "Admins",
    iconName: "ph:user-gear-duotone",
    path: "/dashboard/admins",
  },
  {
    title: "Orders",
    iconName: "ph:package",
    path: "/dashboard/orders",
  },
  {
    title: "Referral Program",
    iconName: "icon-park-outline:circular-connection",
    path: "/dashboard/referral",
  },
  {
    title: "Messages",
    iconName: "mage:message-conversation",
    path: "/dashboard/messages",
  },
];
</script>
<template>
  <aside class="bg-white">
    <div class="sticky top-0 left-0 h-screen">
      <div class="h-full overflow-y-auto">
        <!-- Brand Logo -->
        <div
          class="flex items-center justify-center pt-5 sm:pt-5 md:pt-8 lg:pt-10 xl:pt-12 2xl:pt-16å"
        >
          <NuxtLink to="/" class="w-20">
            <NuxtImg src="/imgs/Brand-Logo.png" class="w-full" alt="" />
          </NuxtLink>
        </div>
        <div class="py-5">
          <ul class="">
            <li class="my-2.5" v-for="navItem in navItems" :key="navItem.title">
              <NuxtLink
                :to="navItem.path"
                class="py-4 rounded-md text-mt-secondary-900 flex items-center px-10 border-l-[24px] border-white"
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
      </div>
    </div>
  </aside>
</template>

<style scoped>
ul .router-link-exact-active {
  @apply bg-mt-secondary border-mt-primary text-white;
}

li a {
  @apply hover:bg-mt-secondary hover:border-mt-primary hover:text-white;
}
</style>
