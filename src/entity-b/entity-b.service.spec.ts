import { Test, TestingModule } from '@nestjs/testing';
import { EntityBService } from './entity-b.service';

describe('EntityBService', () => {
  let service: EntityBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntityBService],
    }).compile();

    service = module.get<EntityBService>(EntityBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
