import { MiddlewareConsumer, Module } from '@nestjs/common';
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
import { PopularRoutes } from './app/Repositories/popular-routes.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieSession = require('cookie-session');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'sqlite',
          database: config.get<'string'>('DB_NAME'),
          entities: [User, Bookings, Products, PopularRoutes],
          synchronize: true,
        };
      },
    }),
    ECommerceModule,
    BookingsModule,
    UsersModule,
    PopularTravelRoutesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private configService: ConfigService) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cookieSession({
          key: [this.configService.get<string>('COOKIE_KEY')],
        }),
      )
      .forRoutes('*');
  }
}
