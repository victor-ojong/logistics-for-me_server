import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bookings } from '../Repositories/bookings.entity';
import { CreateBookingDto } from './dtos/create-bookings.dto';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Bookings)
    private repo: Repository<Bookings>,
  ) {}

  createBooking({ price, email, date }: CreateBookingDto) {
    const item = this.repo.create({ price, email, date });
    return this.repo.save(item);
  }
}
