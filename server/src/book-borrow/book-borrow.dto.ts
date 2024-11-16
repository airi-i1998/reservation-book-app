import { IsDate, IsNumber } from "class-validator";

export class BookBorrowDto {
  @IsNumber()
  userId: number

  @IsNumber()
  bookId: number

  @IsDate()
  borrow_date: Date

  @IsDate()
  return_date?: Date 
}