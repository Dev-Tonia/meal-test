import { ref } from "vue";

export function useIsOpen() {
  const isOpen = ref(false);

  function updateIsOpen() {
    isOpen.value = !isOpen.value;
  }

  return { updateIsOpen, isOpen };
}
