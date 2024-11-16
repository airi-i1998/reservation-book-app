import { Module } from '@nestjs/common';
import { BookRegisterService } from './book-register.service';
import { BookRegisterController } from './book-register.controller';
import { BookRegisterRepository } from './book-register.repository';
import { PrismaModule } from '@/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BookRegisterController],
  providers: [BookRegisterService, BookRegisterRepository]
})
export class BookRegisterModule {}
