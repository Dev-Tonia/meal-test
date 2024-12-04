import { storeToRefs } from "pinia";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("token");
  const { authenticated } = storeToRefs(useAuthStore());
  const path = to.fullPath;
  if (token.value) {
    // check if value exists
    authenticated.value = true; // update the state to authenticated
  }
  // if token exists and url is /login redirect to homepage
  if (token.value && path === "/") {
    return navigateTo("/dashboard");
  }
  if (
    !token.value &&
    path !== "/" &&
    !path.startsWith("/confirm/change-password")
  ) {
    abortNavigation();
    return navigateTo("/");
  }

  // return
});

// const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
// const token = useCookie('token');

// if (token.value) {
//   // check if value exists
//   authenticated.value = true; // update the state to authenticated
// }

// // if token exists and url is /login redirect to homepage
// if (token.value && to?.name === '/') {
//   return navigateTo('/dashboard');
// }

// // if token doesn't exist redirect to log in
// if (!token.value && to?.name !== '/') {
//   // abortNavigation();
//   return navigateTo('/');
// }
