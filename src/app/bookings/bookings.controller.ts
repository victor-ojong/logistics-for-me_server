import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateBookingDto } from './dtos/create-bookings.dto';
import { BookingsService } from './bookings.service';
import { AuthGuard } from '../authguard/authguard.guard';

@UseGuards(AuthGuard)
@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}
  @Post('/new')
  createBooking(@Body() body: CreateBookingDto) {
    return this.bookingsService.createBooking(body);
  }

  @Get('/all-bookings')
  getAllBookings() {
    return this.bookingsService.getAllBookings();
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.bookingsService.delete(parseInt(id));
  }

  @Get('/find/:findBy')
  findAll(@Param('findBy') findBy: string) {
    return findBy;
  }
}
