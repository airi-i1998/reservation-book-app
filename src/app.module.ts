import { Module } from '@nestjs/common';
import { BookBorrowModule } from './book-borrow/book-borrow.module';
import { BookRegisterModule } from './book-register/book-register.module';

@Module({
  imports: [BookBorrowModule, BookRegisterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
