import { Body, Controller, InternalServerErrorException, Logger, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('sign-up')
  async signUp(@Body() userData: CreateUserDto) {
    try {
      const user = await this.authService.signUp(userData)
      return user
    } catch (e) {
      Logger.error(e)
      throw new InternalServerErrorException('Failed to register user.')
    }
  }
}
