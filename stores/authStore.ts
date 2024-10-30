import axios from "axios";
import { defineStore } from "pinia";
import authHeader from "~/services/authHeader";
import type { AdminProfileInterface, UserPayloadInterface } from "~/types/user";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
    currentUser: null as AdminProfileInterface | null,
  }),
  actions: {
    async authenticateUser({ email, password }: UserPayloadInterface) {
      this.loading = true;
      try {
        const response = await axios.post(
          "https://api-staging.mealtrips.com/api/login",
          {
            email,
            password,
          },
          {
            headers: { "Content-Type": "application/json" },
          },
        );
        const data = response.data.data;

        if (data) {
          const token = useCookie("token"); // useCookie new hook in nuxt 3
          token.value = data.token; // set token to cookie
          this.authenticated = true; // set authenticated  state value to true
          setTimeout(() => {
            navigateTo("/dashboard");
          }, 2000);
        }
        return {
          message: "User authenticated successfully",
          success: true,
        };
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
    logUserOut() {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
      navigateTo("/");
    },
    async getCurrentUser() {
      this.loading = true;
      try {
        const res = await axios.get(
          `https://api-staging.mealtrips.com/api/admin/profile`,
          {
            headers: authHeader(),
          },
        );
        this.currentUser = res.data.data;
        return {
          message: "User authenticated successfully",
          success: true,
        };
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
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
