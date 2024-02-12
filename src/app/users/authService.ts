import { promisify } from 'util';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { UsersService } from './users.service';
import { HttpException, Injectable } from '@nestjs/common';
export const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) {
    const userExist = await this.usersService.findByEmail(email);

    if (userExist) {
      throw new HttpException('Email already in use', 403);
    }
    const salt = randomBytes(8).toString('hex');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    password = salt + '.' + hash.toString('hex');

    return await this.usersService.signup(email, password, firstName, lastName);
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new HttpException('Invalid login credentials', 403);
    }

    const [salt, hashedDB] = user.password.split('.');

    const newHash = (await scrypt(password, salt, 32)) as Buffer;

    const isValid = hashedDB === newHash.toString('hex');

    if (!isValid) {
      throw new HttpException('Invalid login credentials', 403);
    }

    return user;
  }
}
