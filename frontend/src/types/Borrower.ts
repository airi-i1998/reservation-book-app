export interface Borrower {
  userId: number
  bookId: number
  borrow_date: Date
  return_date?: string
}