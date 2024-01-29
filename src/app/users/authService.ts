import { promisify } from 'util';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { UsersService } from './users.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../Repositories/users.entity';
import { Repository } from 'typeorm';
const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private repo: Repository<User>,
    private usersService: UsersService,
  ) {}

  async signup(email: string, password: string, username: string) {
    const salt = randomBytes(8).toString('hex');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    password = salt + '.' + hash.toString('hex');

    return this.usersService.signup(email, password, username);
  }

  async login(email: string, password: string) {
    const user = await this.repo.findOne({ where: { email } });

    if (!user) {
      throw new Error('Invalid login credentials');
    }

    const [salt, hashedDB] = user.password.split('.').at(0);

    const newHash = (await scrypt(password, salt, 32)) as Buffer;

    const isValid = hashedDB === newHash.toString('hex');
    if (!isValid) {
      throw new Error('Invalid login credentials');
    }

    return user;
  }
}
