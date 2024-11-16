import { Body, Controller, InternalServerErrorException, Logger, Post } from '@nestjs/common';
import { BookRegisterService } from './book-register.service';
import { BookDto } from './book-register.dto';

@Controller('book-register')
export class BookRegisterController {
  constructor(private readonly bookRegisterService: BookRegisterService){}

  @Post()
  async registerBook(@Body() bookData: BookDto) {
    try {
      const book = await this.bookRegisterService.registerBook(bookData)

    } catch(e) {
      Logger.error(e)
      throw new InternalServerErrorException('Failed to register book.')
    }
  }
}
