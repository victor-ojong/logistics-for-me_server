import { randomBytes } from 'crypto';
import { UsersService } from './users.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../Repositories/users.entity';
import { Repository } from 'typeorm';
import { scrypt } from './authService';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private repo: Repository<User>,
    private usersService: UsersService,
  ) {}

  async signup(email: string, password: string, username: string) {
    const salt = randomBytes(8).toString('hex');

    console.log(salt);

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    password = salt + '.' + hash.toString('hex');

    return await this.usersService.signup(email, password, username);
  }

  async login(email: string, password: string) {
    const user = await this.repo.findOne({ where: { email } });

    console.log(user);

    if (!user) {
      throw new Error('Invalid login credentials');
    }

    const [salt, hashedDB] = user.password.split('.').at(0);

    const newHash = (await scrypt(password, salt, 32)) as Buffer;

    const isValid = hashedDB === newHash.toString('hex');

    console.log(hashedDB, newHash);
    if (!isValid) {
      throw new Error('Password login credentials');
    }

    return user;
  }
}
