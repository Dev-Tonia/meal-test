<template>
  <div class="py-4">
    <PageTitle page-title="Admins" />

    <SearchFilter />
    <ReusableTable :table-titles="adminsHeader">
      <TableRow v-for="(user, index) in getAdmins" :key="index">
        <TableCheckbox />
        <TableData :data="user.firstname" />
        <TableData :data="user.lastname" />
        <TableData :data="user.email" />
        <!-- <TableData>
          <button class="bg-purple-500 text-white text-xs rounded-full px-7 py-1.5">{{ user.role }}</button>
        </TableData> -->
        <!-- <TableData>
          <div class="flex text-xs gap-x-10 ">
            <button class="bg-gray-400 rounded-full px-7 py-1.5">Edit</button>
            <button class="bg-red-100 rounded-full px-7 py-1.5">Delete</button>
          </div>
        </TableData> -->
      </TableRow>
    </ReusableTable>
    <!-- <MTPagination :total-pages="ordersData?.meta?.total" :itemsPerPage="ordersData?.meta?.per_page" @goto="gotoPage"
      @prev-page="prevPage" @next-page="nextPage" /> -->
  </div>
</template>

<script setup lang="ts">
import authHeader from '~/services/authHeader';

const {
  data: admins,
  pending: isPending,
  error: error,
} = useApiCall("/admin/users/all", {
  headers: authHeader(),
});



const getAdmins = computed(() => {
  const x = admins.value?.data.filter((user: any) => {
    const role = String(user.role).toLocaleLowerCase()
    return role === 'admin' || role === 'super admin' || role === 'sales and marketing'
  })
  return x
})
console.log("🚀 ~ getAdmins ~ getAdmins:", getAdmins.value)

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