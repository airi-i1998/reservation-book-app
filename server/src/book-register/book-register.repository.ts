import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
import { BookDto } from "./book-register.dto";

@Injectable()
export class BookRegisterRepository {
  constructor(private readonly prisma: PrismaService) { }

  async createrBook(bookData: BookDto) {
    return await this.prisma.book.create({ data: bookData })
  }
}