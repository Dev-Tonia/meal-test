// import Cookies from 'js-cookie';
import { storeToRefs } from 'pinia';

export default defineNuxtRouteMiddleware((to, from) => {
  const {isAuthenticated} = storeToRefs(useAuthStore());
  const token = useCookie('userToken');
  const path = to.fullPath;
  if (token.value) {
    // check if value exists
    // todo verify if token is valid, before updating the state
    isAuthenticated.value = true; // update the state to authenticated
  }
  // if token exists and url is /login redirect to homepage
  if (token.value && path === '/') {
    return navigateTo('/dashboard');
  }
  if (!token.value && path !== '/') {
    abortNavigation();
    return navigateTo('/');
  }
});