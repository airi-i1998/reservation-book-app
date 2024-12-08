import { Body, Controller, InternalServerErrorException, Logger, Post, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { CredentialsDto } from './dto/credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('sign-up')
  async signUp(@Body() userData: CreateUserDto) {
    try {
      const user = await this.authService.signUp(userData)
      return user
    } catch (e) {
      Logger.error(`Sign-up failed: ${e.message}`, e.stack, 'AuthController')
      throw new InternalServerErrorException('An unexpected error occurred during sign-up.')
    }
  }

  @Post('sign-in')
  async signIn(@Body() userData: CredentialsDto) {
    try {
      const token = await this.authService.signIn(userData)
      return token
    } catch (e) {
      Logger.error(`Sign-in failed: ${e.message}`, e.stack, 'AuthController')
      throw new InternalServerErrorException('Invalid email or password.')
    }
  }
}
