import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from './authService';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  signUp(@Body() body: CreateUserDto) {
    return this.authService.signup(body.email, body.password, body.username);
  }

  @Post('/login')
  login(@Body() body: any) {
    return body;
  }
}
