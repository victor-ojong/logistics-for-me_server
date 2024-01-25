import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ECommerceModule } from './app/e-commerce/e-commerce.module';
import { BookingsModule } from './app/bookings/bookings.module';
import { UsersModule } from './app/users/users.module';
import { PopularTravelRoutesModule } from './app/popular-travel-routes/popular-travel-routes.module';
import { User } from './app/Repositories/users.entity';
import { Bookings } from './app/Repositories/bookings.entity';
import { Products } from './app/Repositories/products.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Bookings, Products],
      synchronize: true,
    }),
    ECommerceModule,
    BookingsModule,
    UsersModule,
    PopularTravelRoutesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
