import { ref } from "vue"
import axios, { AxiosError } from "axios"
import { User } from "../types/User"

export const useAuthenticationApi = () => {
  const error = ref<AxiosError>()

  const signUp = async (userData: User) => {
    try {
      await axios.post('api/user/register', userData)
    } catch (e) {
      error.value = e as AxiosError
    }
  }

  return signUp
}