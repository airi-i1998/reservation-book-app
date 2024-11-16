import { Injectable } from '@nestjs/common';
import { BookBorrowRepository } from './book-borrow.repository';
import { BookBorrowDto } from './book-borrow.dto';

@Injectable()
export class BookBorrowService {
  constructor(private readonly bookBorrowRepository: BookBorrowRepository) { }

  async borrowBook(borrowerData: BookBorrowDto) {
    try {
      const book = this.bookBorrowRepository.createBorrowBookRecord(borrowerData)
      return book
    } catch (e) {
      return null
    }
  }
}
