import { Injectable, ConflictException } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) { }

  private async createHashedPassword(password: string) {
    return await bcrypt.hash(password, 10)
  }

  async duplicateCheck(email: string) {
    return this.authRepository.checkEmailDuplicate(email)
  }

  async signUp(userData: CreateUserDto) {
    const duplicateCheck = await this.duplicateCheck(userData.email)
    if (duplicateCheck) {
      throw new ConflictException('Email already exists.')
    }

    const hashedPassword = await this.createHashedPassword(userData.password)

    return this.authRepository.createUser(userData.firstName, userData.lastName, userData.email, hashedPassword);
  }
}
