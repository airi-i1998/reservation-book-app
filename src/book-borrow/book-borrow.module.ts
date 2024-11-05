import { Module } from '@nestjs/common';
import { BookBorrowController } from './book-borrow.controller';
import { BookBorrowService } from './book-borrow.service';

@Module({
  controllers: [BookBorrowController],
  providers: [BookBorrowService],
})
export class BookBorrowModule {}
