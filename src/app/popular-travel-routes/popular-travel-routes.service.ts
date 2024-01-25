import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PopularRoutes } from '../Repositories/popular-routes.entity';

@Injectable()
export class PopularTravelRoutesService {
  constructor(
    @InjectRepository(PopularRoutes) private repo: Repository<PopularRoutes>,
  ) {}

  createRoute(price: number, route: string, description: string) {
    const item = this.repo.create({ price, route, description });
    return this.repo.save(item);
  }
}
