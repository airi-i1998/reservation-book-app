import { ref } from "vue"
import axios,{ AxiosError } from "axios"
import { Book } from "../types/Book"

export const useBookRegisterAPI = () => {
  const error = ref<AxiosError>()

  const bookRegister = async (bookData: Book) => {
    try {
      await axios.post('/api/book-register', bookData)
    } catch (e) {
      error.value = e as AxiosError
    }
  }

  return bookRegister
}