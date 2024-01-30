import { promisify } from 'util';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { UsersService } from './users.service';
import { Injectable } from '@nestjs/common';
export const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string, username: string) {
    const salt = randomBytes(8).toString('hex');

    console.log(salt);

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    password = salt + '.' + hash.toString('hex');

    return await this.usersService.signup(email, password, username);
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    // console.log(user);

    if (!user) {
      return 'Invalid login credentials';
    }

    const [salt, hashedDB] = user.password.split('.');

    // const newHash = (await scrypt(password, salt, 32)) as Buffer;

    // const isValid = hashedDB === newHash.toString('hex');

    // console.log(newHash.toString('hex'), '888');

    // if (!isValid) {
    //   return 'Password login credentials';
    // }

    return user;
  }
}
