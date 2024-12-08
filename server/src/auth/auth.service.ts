import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { CredentialsDto } from './dto/credentials.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '@/types/jwtPayload';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
  ) { }

  private async createHashedPassword(password: string) {
    return await bcrypt.hash(password, 10)
  }

  private async validatePassword(providedPassword: string, storedPassword: string) {
    return await bcrypt.compare(providedPassword, storedPassword)
  }

  private createPayload({ id, firstName, lastName }): JwtPayload {
    return {
      sub: id,
      firstName: firstName,
      lastName: lastName,
    };
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

  async signIn(credentialsDto: CredentialsDto) {
    const user = await this.authRepository.findUserByEmail(credentialsDto.email)
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = this.validatePassword(credentialsDto.password, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = this.createPayload({ id: user.id, firstName: user.firstName, lastName: user.lastName })

    return this.jwtService.sign(payload)
  }
}
