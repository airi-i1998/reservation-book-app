import { Module } from '@nestjs/common';
import { BookRegisterModule } from './book-register/book-register.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, BookRegisterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
