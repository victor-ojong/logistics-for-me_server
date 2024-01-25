import { promisify } from 'util';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { UsersService } from './users.service';
import { Injectable } from '@nestjs/common';
const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string, username: string) {
    const salt = randomBytes(8).toString('hex');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    password = salt + '.' + hash.toString('hex');

    return this.usersService.signup(email, password, username);
  }
}
