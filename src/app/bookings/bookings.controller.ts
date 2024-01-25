import { Controller, Post, Body } from '@nestjs/common';
import { CreateBookingDto } from './dtos/create-bookings.dto';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}
  @Post('/new')
  createUser(@Body() body: CreateBookingDto) {
    return this.bookingsService.createBooking(body);
  }
}
