import axios, { AxiosError } from "axios"
import { ref } from "vue"
import { Borrower } from "../types/Borrower"

export const useBookBorrowingAPI = () => {
  const error = ref<AxiosError>()

  const bookBorrow = async (borrowerData: Borrower) => {
    try {
      await axios.post('api/book-borrow', borrowerData)
    } catch (e) {
      error.value = e as AxiosError
    }
  }

  return bookBorrow
}