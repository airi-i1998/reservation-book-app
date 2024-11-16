import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientManager } from '../prisma/prismaClientManager';

@Module({
  providers: [PrismaService, PrismaClientManager],
  exports: [PrismaService, PrismaClientManager],
})
export class PrismaModule {}
