import axios from "axios";
import { defineStore } from "pinia";
import authHeader from "~/services/authHeader";
import type { ISelectedAdminUser } from "~/types/user";

export const useGlobalStore = defineStore("globalStore", {
  state: () => ({
    openModal: false,
    loading: false,
    addAdminStatus: true,
    assignableRoles: [],
    selectedAdminUser: {
      user_id: "",
      firstname: "",
      lastname: "",
      email: "",
      role: "",
    } as ISelectedAdminUser,
  }),
  actions: {
    toggleModal() {
      this.openModal = !this.openModal;
    },
    async getAssignableRoles() {
      this.loading = true;
      try {
        if (!this.assignableRoles.length) {
          const res = await axios.get(
            `https://api-staging.mealtrips.com/api/admin/admin-roles/assignables`,
            {
              headers: authHeader(),
            },
          );
          const roles = res.data.data.data.map((role: any) => role.guard_name);
          this.assignableRoles = roles;
          return {
            message: "Roles fetched successfully",
            success: true,
          };
        }
        return;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          return {
            message: error.response.data.message,
            success: false,
          };
        } else {
          return {
            message: "An unexpected error occurred",
            success: false,
          };
        }
      } finally {
        this.loading = false;
      }
    },
    getSelectedAdminUser(adminUser: any) {
      console.log(adminUser.profile.user_id);
      this.selectedAdminUser = {
        user_id: adminUser.profile.user_id,
        firstname: adminUser.firstname,
        lastname: adminUser.lastname,
        email: adminUser.email,
        role: adminUser.role,
      };
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot));
}
