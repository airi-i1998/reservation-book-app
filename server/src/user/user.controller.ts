import { Body, Controller, InternalServerErrorException, Logger, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('register')
  async userRegister(@Body() userData: UserDto) {
    try {
      const user = await this.userService.userRegister(userData)
      return user
    } catch (e) {
      Logger.error(e)
      throw new InternalServerErrorException('Failed to register user.')
    }
  }
}
