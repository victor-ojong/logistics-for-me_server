import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bookings } from '../Repositories/bookings.entity';
import { User } from '../Repositories/users.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Bookings)
    private repo: Repository<Bookings>,
  ) {}

  createBooking(attrs: Partial<Bookings>, user: User) {
    const bookings = this.repo.create(attrs);
    bookings.users = user;
    return this.repo.save(bookings);
  }

  getAllBookings() {
    return this.repo.find();
  }

  async delete(id: number) {
    const booking = await this.findOne(id);
    return this.repo.remove(booking);
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }
}
