import {
  Controller,
  Post,
  Body,
  Get,
  Session,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { CurrentUser } from './interceptors/users.interceptor';
import { LoggedInUser } from './decorators/decorators.decorator';
import { User } from '../Repositories/users.entity';
import { AuthService } from './authService';
import { AuthGuard } from '../authguard/authguard.guard';
import { Serialize } from './interceptors/users-response.interceptor';
import { UserDto } from './serializer-response-dtos/user.dto';

@Controller('users')
@Serialize(UserDto)
export class UsersController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(
      body.email,
      body.password,
      body.firstName,
      body.lastName,
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

  @Get('/logout')
  logOut(@Session() session: any) {
    session.userId = null;
  }

  @UseGuards(AuthGuard)
  @UseInterceptors(CurrentUser)
  @Get('/currentUser')
  getCurrentUser(@LoggedInUser() user: User) {
    return user;
  }
}
