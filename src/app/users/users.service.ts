import { Injectable } from '@nestjs/common';
@Injectable()
export class UsersService {
  signup(email: string, password: string, username: string) {
    return { email, password, username };
  }
}
