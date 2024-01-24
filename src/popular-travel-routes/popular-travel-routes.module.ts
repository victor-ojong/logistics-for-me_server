import { Module } from '@nestjs/common';
import { PopularTravelRoutesController } from './popular-travel-routes.controller';
import { PopularTravelRoutesService } from './popular-travel-routes.service';

@Module({
  controllers: [PopularTravelRoutesController],
  providers: [PopularTravelRoutesService],
})
export class PopularTravelRoutesModule {}
