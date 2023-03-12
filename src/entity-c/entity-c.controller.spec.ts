import { Test, TestingModule } from '@nestjs/testing';
import { EntityCController } from './entity-c.controller';
import { EntityCService } from './entity-c.service';

describe('EntityCController', () => {
  let controller: EntityCController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntityCController],
      providers: [EntityCService],
    }).compile();

    controller = module.get<EntityCController>(EntityCController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
