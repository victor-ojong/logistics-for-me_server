import { Test, TestingModule } from '@nestjs/testing';
import { PopularTravelRoutesController } from './popular-travel-routes.controller';

describe('PopularTravelRoutesController', () => {
  let controller: PopularTravelRoutesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PopularTravelRoutesController],
    }).compile();

    controller = module.get<PopularTravelRoutesController>(
      PopularTravelRoutesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
