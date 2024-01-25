import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bookings } from '../Repositories/bookings.entity';

@Injectable()
export class BookingsService {
  constructor(@InjectRepository(Bookings) private repo: Repository<Bookings>) {}
}
