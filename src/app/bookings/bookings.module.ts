import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { Bookings } from '../Repositories/bookings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bookings])],
  providers: [BookingsService],
  controllers: [BookingsController],
})
export class BookingsModule {}
