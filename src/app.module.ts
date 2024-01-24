import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ECommerceModule } from './app/e-commerce/e-commerce.module';
import { BookingsModule } from './app/bookings/bookings.module';
import { UsersModule } from './app/users/users.module';
import { PopularTravelRoutesModule } from './app/popular-travel-routes/popular-travel-routes.module';

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
