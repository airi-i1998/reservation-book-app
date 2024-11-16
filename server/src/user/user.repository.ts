import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) { }

  async checkEmailDuplicate(email: string) {
    return this.prisma.user.findFirst({
      where: {
        email
      }
    })
  }

  async createUser(email: string, password: string) {
    return this.prisma.user.create({
      data: { email, password }
    })
  }
}