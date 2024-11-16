import { Injectable } from '@nestjs/common';
import { BookRegisterRepository } from './book-register.repository';
import { BookDto } from './book-register.dto';

@Injectable()
export class BookRegisterService {
  constructor(private readonly bookRegisterRepository: BookRegisterRepository){}

  async registerBook(bookData: BookDto) {
    try {
      const book = await this.bookRegisterRepository.createrBook(bookData)
      return book
    } catch(e) {
      return null
    }
  }
}
