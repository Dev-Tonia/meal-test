import { defineStore } from 'pinia'
import auth from '~/services/auth'
// const router = useRouter()
export const useAuthStore = defineStore('auth', () => {
  const user: Ref<IUser | null> = ref(null)
  const isAuthenticated = ref(false)
  const authMessage = ref('')

  const login = async (credentials: IUserLogin) => {
    const response = await auth.login(credentials)

    if ('data' in response && response.data.success) {
      const token = useCookie('userToken')
      token.value = response.data.data.token
      isAuthenticated.value = true
      navigateTo('/dashboard')
      authMessage.value = response.data.message
      return
    }
    authMessage.value = 'data' in response ? response.data.message : response.message

  }

  const getUserProfile = async () => {
    const response = await auth.getUser()
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
    authMessage,
    login,
    isAuthenticated,
    logout,
    getUserProfile

  }
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}