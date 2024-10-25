<template>
  <div class="py-4">
    <PageTitle page-title="Admins" />
    <Modal v-motion :initial="{ opacity: 0, scale: 0.9 }" :visible="{ opacity: 1, scale: 1 }" v-if="openModal">
      <add-admin v-if="addAdminStatus" :isEdit="true"></add-admin>
      <modal-message v-else v-motion :initial="{ opacity: 0, scale: 0.9 }"
        :visible="{ opacity: 1, scale: 1 }"></modal-message>
    </Modal>
    <!-- <SearchFilter v-model="search" /> -->
    <div class="flex justify-between py-3">
      <div class="flex space-x-2 w-[500px]">
        <CustomInput class="w-full" inputType="text" label="" placeholder="Search for customer" v-model="search">
          <Icon name="mi:search" size="24" class="text-gray-400 mr-1.5" />
        </CustomInput>
        <button class="border rounded-[4px] size-fit py-[13px] text-gray-500 px-6">
          Filters
        </button>
      </div>
    </div>

    <ReusableTable :table-titles="adminsHeader">
      <TableRow v-for="(user, index) in getAdmins" :key="index">
        <TableCheckbox />
        <TableData :data="user.firstname" />
        <TableData :data="user.lastname" />
        <TableData :data="user.email" />
        <TableData>
          <button class="bg-purple-500 text-white text-xs capitalize rounded-full px-7 py-1.5">
            {{ user.role }}
          </button>
        </TableData>
        <TableData>
          <div class="flex text-xs gap-x-10">
            <button @click="editAdmin(user)" class="bg-gray-400 rounded-full px-7 py-1.5">
              Edit
            </button>
            <ConfirmationModal>
              <template #trigger>
                <button class="bg-red-100 rounded-full px-7 py-1.5">
                  Delete
                </button>
              </template>
              <template #continue>
                <button @click="deleteAdmin(user)">Continue</button>
              </template>
            </ConfirmationModal>
          </div>
        </TableData>
      </TableRow>
    </ReusableTable>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import authHeader from "~/services/authHeader";
const { toggleModal, getSelectedAdminUser } = useGlobalStore();
const { openModal, addAdminStatus } = storeToRefs(useGlobalStore());
const config = useRuntimeConfig();

// /admin/search/admin/osadolor

// customer fetching and searching
const search = ref("");
const debouncedSearch = ref("");
const fetchKey = ref(""); // unique key to clear the cache

const url = computed(() => {
  if (debouncedSearch.value) {
    fetchKey.value = "/admin/search/admin";
    return `${config.public.baseURL}/admin/search/admin/${encodeURIComponent(
      debouncedSearch.value
    )}`;
  } else {
    fetchKey.value = "/admin/admin-users";

    return `${config.public.baseURL}/admin/admin-users`;
  }
});

const {
  data: admins,
  pending: isPending,
  error: error,
  refresh,
} = useFetch(url, {
  headers: authHeader(),
  key: fetchKey.value,
});

// Debounce search input
let debounceTimer: string | number | NodeJS.Timeout;
watch(search, (newValue) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    debouncedSearch.value = newValue;
  }, 1000); // 1000ms debounce
});

// getting the admins and assigning them to the admins variable
const getAdmins = computed(() => {
  const x = admins.value?.data?.filter((user: any) => {
    const role = String(user.role).toLocaleLowerCase();
    return (
      role === "admin" ||
      role === "super admin" ||
      role === "sales and marketing"
    );
  });
  return x;
});

// edit an admin
const editAdmin = (user: any) => {
  console.log("🚀 ~ editAdmin ~ user:", user);
  getSelectedAdminUser(user);
  toggleModal();
};

// delete an admin
const deleteAdmin = async (user: any) => {
  // console.log("🚀 ~ deleteAdmin ~ user:", user);
  const id = user.profile.user_id;
  try {
    const res = await axios.delete(
      `https://api-staging.mealtrips.com/api/admin/admin-users/delete/${id}`,
      {
        headers: authHeader(),
      }
    );
    customToast(`${res.data.message}`, true);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      customToast(error.response.data.message, false);
    } else {
      customToast("An unexpected error occurred", false);
    }
  }
};
</script>

<style lang="scss" scoped></style>
