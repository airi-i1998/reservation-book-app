import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { BookBorrowDto } from "./book-borrow.dto";

@Injectable()
export class BookBorrowRepository {
  constructor(private readonly prisma: PrismaService) { }

  async createBorrowBookRecord(borrowerData: BookBorrowDto) {
    return await this.prisma.bookBorrow.create({ data: borrowerData })
  }
}