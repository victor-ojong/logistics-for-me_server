import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './authService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../Repositories/users.entity';
import { CurrentUser } from './interceptors/users.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, AuthService, CurrentUser],
})
export class UsersModule {}
