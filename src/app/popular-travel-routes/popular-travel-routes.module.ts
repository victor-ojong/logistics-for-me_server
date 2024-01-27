import { Module } from '@nestjs/common';
import { PopularTravelRoutesController } from './popular-travel-routes.controller';
import { PopularTravelRoutesService } from './popular-travel-routes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PopularRoutes } from '../Repositories/popular-routes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PopularRoutes])],
  controllers: [PopularTravelRoutesController],
  providers: [PopularTravelRoutesService],
})
export class PopularTravelRoutesModule {}
