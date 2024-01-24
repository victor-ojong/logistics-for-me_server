import { Test, TestingModule } from '@nestjs/testing';
import { PopularTravelRoutesService } from './popular-travel-routes.service';

describe('PopularTravelRoutesService', () => {
  let service: PopularTravelRoutesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PopularTravelRoutesService],
    }).compile();

    service = module.get<PopularTravelRoutesService>(
      PopularTravelRoutesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
