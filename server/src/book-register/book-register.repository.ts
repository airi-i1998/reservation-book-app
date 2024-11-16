import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
import { BookDto } from "./book-register.dto";

@Injectable()
export class BookRegisterRepository {
  constructor(private readonly prisma: PrismaService) { }

  async createBook(bookData: BookDto) {
    return this.prisma.book.create({ data: bookData })
  }
}