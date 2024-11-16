import { Body, Controller, InternalServerErrorException, Logger, Post } from '@nestjs/common';
import { BookBorrowService } from './book-borrow.service';
import { BookBorrowDto } from './book-borrow.dto';

@Controller('book-borrow')
export class BookBorrowController {
  constructor(private readonly bookBorrowService: BookBorrowService) { }

  @Post()
  async borrowBook(@Body() borrowerData: BookBorrowDto) {
    try {
      const book = this.bookBorrowService.borrowBook(borrowerData)
      return book
    } catch (e) {
      Logger.error(e)
      throw new InternalServerErrorException('Failed to borrow book.')
    }

  }
}
