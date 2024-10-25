<template>
  <div class="py-4">
    <PageTitle page-title="Admins" />
    <Modal
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :visible="{ opacity: 1, scale: 1 }"
      v-if="openModal"
    >
      <add-admin v-if="addAdminStatus" :isEdit="true"></add-admin>
      <modal-message
        v-else
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :visible="{ opacity: 1, scale: 1 }"
      ></modal-message>
    </Modal>
    <SearchFilter />
    <ReusableTable :table-titles="adminsHeader">
      <TableRow v-for="(user, index) in getAdmins" :key="index">
        <!-- <pre>{{ user }}</pre> -->
        <TableCheckbox />
        <TableData :data="user.firstname" />
        <TableData :data="user.lastname" />
        <TableData :data="user.email" />
        <TableData>
          <button
            class="bg-purple-500 text-white text-xs capitalize rounded-full px-7 py-1.5"
          >
            {{ user.role }}
          </button>
        </TableData>
        <TableData>
          <div class="flex text-xs gap-x-10">
            <button
              @click="editAdmin(user)"
              class="bg-gray-400 rounded-full px-7 py-1.5"
            >
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
    <!-- <pre>{{ admins }}</pre> -->
    <!-- <MTPagination :total-pages="admins?.data?.meta?.total" :itemsPerPage="admins?.data?.meta?.per_page"
      @prev-page="admins?.data?.links?.prev" @next-page="admins?.data?.links?.next" /> -->
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import authHeader from "~/services/authHeader";
const { toggleModal, getSelectedAdminUser } = useGlobalStore();
const { openModal, addAdminStatus } = storeToRefs(useGlobalStore());
const {
  data: admins,
  pending: isPending,
  error: error,
} = useApiCall("/admin/admin-users", {
  headers: authHeader(),
});

const getAdmins = computed(() => {
  const x = admins.value?.data.filter((user: any) => {
    const role = String(user.role).toLocaleLowerCase();
    return (
      role === "admin" ||
      role === "super admin" ||
      role === "sales and marketing"
    );
  });
  return x;
});

const editAdmin = (user: any) => {
  console.log("🚀 ~ editAdmin ~ user:", user);
  getSelectedAdminUser(user);
  toggleModal();
};

// dev ||

const deleteAdmin = async (user: any) => {
  console.log("🚀 ~ deleteAdmin ~ user:", user);
  const id = user.profile.user_id;
  try {
    const res = await axios.delete(
      `https://api-staging.mealtrips.com/api/admin/admin-users/delete/${id}`,
      {
        headers: authHeader(),
      },
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
// const getAdmins = computed(() => {
//   return usersData.value.map((user) => {
//     return {
//       firstName: user.firstName,
//       lastName: user.lastName,
//       email: user.email,
//       role: user.role,
//     };
//   });
// })
</script>

<style lang="scss" scoped></style>
