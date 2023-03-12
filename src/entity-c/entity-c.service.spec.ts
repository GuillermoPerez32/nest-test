import { Test, TestingModule } from '@nestjs/testing';
import { EntityCService } from './entity-c.service';

describe('EntityCService', () => {
  let service: EntityCService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntityCService],
    }).compile();

    service = module.get<EntityCService>(EntityCService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
