
import { defineStore } from "pinia";
export const useGlobalStore = defineStore('globalStore', {
  state: () => ({
    openModal: false,
    loading: false,
    addAdminStatus: true,
  }),
  actions: {
    toggleModal() {
      this.openModal = !this.openModal;
    },
  },
});


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot));
}
