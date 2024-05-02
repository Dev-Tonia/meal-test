import { defineStore } from 'pinia'
import auth from '~/services/auth'
// const router = useRouter()
export const useAuthStore = defineStore('auth', () => {
  const user= ref<IUser | null>(null)
  const isAuthenticated = ref(false)


  const login = async (credentials: IUserLogin) => {
    const response = await auth.login(credentials)

    if (response.data.success) {
      const token = useCookie('userToken')
      token.value = response.data.data.token
      isAuthenticated.value = true
      navigateTo('/dashboard')
    }

  }

  const getUserProfile = async () => {
    const response = await auth.getUser()
    console.log("🚀 ~ getUserProfile ~ response:", response)
    user.value = response.data.data
    console.log("🚀 ~ getUserProfile ~ user:", user?.value?.firstname)
  }
  const logout = async () => {
    const token = useCookie('userToken')
    token.value = null
    isAuthenticated.value = false
    user.value = null
    navigateTo('/')
  }

  return {
    user,
    login,
    isAuthenticated,
    logout,
    getUserProfile

  }
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}