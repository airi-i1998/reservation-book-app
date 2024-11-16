import { Injectable, ConflictException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserDto } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) { }

  private async createHashedPassword(password: string) {
    return await bcrypt.hash(password, 10)
  }

  async duplicateCheck(email: string) {
    return this.userRepository.checkEmailDuplicate(email)
  }

  async userRegister(userData: UserDto) {
    const duplicateCheck = await this.duplicateCheck(userData.email)
    if (duplicateCheck) {
      throw new ConflictException('Email already exists.')
    }

    const hashedPassword = await this.createHashedPassword(userData.password)

    return this.userRepository.createUser(userData.email, hashedPassword);
  }
}
