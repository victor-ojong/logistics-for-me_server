import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { BookingsModule } from './bookings/bookings.module';
import { UsersModule } from './users/users.module';
import { PopularTravelRoutesModule } from './popular-travel-routes/popular-travel-routes.module';

@Module({
  imports: [
    ECommerceModule,
    BookingsModule,
    UsersModule,
    PopularTravelRoutesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
