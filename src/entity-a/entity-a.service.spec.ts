import { Test, TestingModule } from '@nestjs/testing';
import { EntityAService } from './entity-a.service';

describe('EntityAService', () => {
  let service: EntityAService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntityAService],
    }).compile();

    service = module.get<EntityAService>(EntityAService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
