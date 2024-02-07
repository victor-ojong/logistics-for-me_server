import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bookings } from '../Repositories/bookings.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Bookings)
    private repo: Repository<Bookings>,
  ) {}

  createBooking(attrs: Partial<Bookings>) {
    const bookings = this.repo.create(attrs);
    return this.repo.save(bookings);
  }

  getAllBookings() {
    return this.repo.find();
  }

  delete(id: number) {
    return this.repo.delete({ id });
  }
}
