import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../Repositories/users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  signup(email: string, password: string, username: string) {
    const user = this.repo.create({ email, password, username });
    return this.repo.save(user);
  }

  async findOne(id: number) {
    const user = await this.repo.findOne({ where: { id } });
    return user ? user : null;
  }
}
