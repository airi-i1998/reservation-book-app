import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) { }

  async checkEmailDuplicate(email: string) {
    return this.prisma.user.findFirst({
      where: {
        email
      }
    })
  }

  async createUser(firstName: string, lastName: string, email: string, password: string) {
    return this.prisma.user.create({
      data: { firstName, lastName, email, password }
    })
  }

  async findUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email
      }
    })
  }
}