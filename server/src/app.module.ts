import { Module } from '@nestjs/common';
import { BookRegisterModule } from './book-register/book-register.module';
import { PrismaModule } from './prisma/prisma.module';
import { BookBorrowModule } from './book-borrow/book-borrow.module';

@Module({
  imports: [PrismaModule, BookRegisterModule, BookBorrowModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
