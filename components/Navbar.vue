<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
  //@ts-ignore
} from '@/components/ui/dropdown-menu';
import { storeToRefs } from 'pinia';
const { isAuthenticated, user } = storeToRefs(useAuthStore());

const store = useAuthStore()
const currentUser = user
const router = useRouter()

const handleLogout = () => {
  store.logout()
}
</script>

<template>
  <nav class="px-8 py-3 mb-4 border">
    <div class="flex items-center justify-between">
      <div class="flex space-x-4 basis-[60%]">
        <CustomInput class="w-full" inputType="text" label="" placeholder="Search for products">
          <Icon name="mi:search" size="24" class="text-gray-400" />
        </CustomInput>
        <BaseButton class="text-text-1" :btnData="{
          iconName: 'bi:filter',
          title: 'Filters',
        }" />
      </div>
      <div class="flex items-center space-x-2">
        <div class="bg-white border w-9 h-9 rounded-full flex items-center justify-center">
          <Icon name="octicon:bell-fill-24" class="text-text-1 text-2xl" />
        </div>
        <div class="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden">
          <img :src="currentUser?.photo ? currentUser?.photo : '../assets/imgs/UserAvater.png'" class="w-full" />
        </div>
        <div class="text-text-1">

          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <button> <span class="font-medium">Admin</span>
                <Icon name="ri:arrow-down-s-line" class="text-2xl" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-24 bg-white z-[2]">
              <DropdownMenuLabel>{{ currentUser?.firstname }}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button @click="handleLogout" class="">Logout</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
