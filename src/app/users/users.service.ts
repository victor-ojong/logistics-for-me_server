import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../Repositories/users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  signup(email: string, password: string, firstName: string, lastName: string) {
    const user = this.repo.create({ email, password, firstName, lastName });
    return this.repo.save(user);
  }

  async findOne(id: number) {
    return await this.repo.findOne({ where: { id } });
  }
  async findByEmail(email: string) {
    return await this.repo.findOne({ where: { email } });
  }
}
