import { Module } from '@nestjs/common';
import { BookRegisterController } from './book-register.controller';
import { BookRegisterService } from './book-register.service';

@Module({
  controllers: [BookRegisterController],
  providers: [BookRegisterService],
})
export class BookRegisterModule {}
