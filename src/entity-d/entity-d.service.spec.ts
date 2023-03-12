import { Test, TestingModule } from '@nestjs/testing';
import { EntityDService } from './entity-d.service';

describe('EntityDService', () => {
  let service: EntityDService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntityDService],
    }).compile();

    service = module.get<EntityDService>(EntityDService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
