import { Module } from '@nestjs/common';
import { BookBorrowService } from './book-borrow.service';
import { BookBorrowController } from './book-borrow.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { BookBorrowRepository } from './book-borrow.repository';

@Module({
  imports: [PrismaModule],
  providers: [BookBorrowRepository, BookBorrowService],
  controllers: [BookBorrowController]
})
export class BookBorrowModule {}
