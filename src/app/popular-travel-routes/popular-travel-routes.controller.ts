import { Body, Controller, Post } from '@nestjs/common';
import { PopularTravelRoutesService } from './popular-travel-routes.service';
import { AddRouteDto } from './dtos/add-routes.dto';

PopularTravelRoutesService;
@Controller('popular-travel-routes')
export class PopularTravelRoutesController {
  constructor(private popularTravelRoutesService: PopularTravelRoutesService) {}
  @Post('/add')
  addRoute(@Body() body: AddRouteDto) {
    return this.popularTravelRoutesService.createRoute(
      body.price,
      body.route,
      body.description,
    );
  }
}
