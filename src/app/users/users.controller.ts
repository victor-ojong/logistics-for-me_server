import {
  Controller,
  Post,
  Body,
  Get,
  Session,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { CurrentUser } from './interceptors/users.interceptor';
import { LoggedInUser } from './decorators/decorators.decorator';
import { User } from '../Repositories/users.entity';
import { AuthService } from './authService';

@Controller('users')
export class UsersController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(
      body.email,
      body.password,
      body.username,
    );
    session.userId = user.id;

    return user;
  }

  @Post('/login')
  async login(@Body() body: any, @Session() session: any) {
    const user = await this.authService.login(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  @UseInterceptors(CurrentUser)
  @Get('/currentUser')
  getCurrentUser(@LoggedInUser() user: User) {
    return user;
  }
}
