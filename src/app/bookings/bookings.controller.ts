import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Param,
  Delete,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { AuthGuard } from '../authguard/authguard.guard';
import { CurrentUser } from '../users/interceptors/users.interceptor';
import { Serialize } from '../inteceptors/users-response.interceptor';
import { BookingsDto } from '../serializer-response-dtos/bookings-response.dto';
import { CreateBookingDto } from './dtos/create-bookings.dto';

@Serialize(BookingsDto)
@UseGuards(AuthGuard)
@UseInterceptors(CurrentUser)
@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}
  @Post('/new')
  createBooking(@Body() body: CreateBookingDto, @Req() req: any) {
    return this.bookingsService.createBooking(body, req.user);
  }

  @Get()
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
