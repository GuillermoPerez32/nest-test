import { Test, TestingModule } from '@nestjs/testing';
import { EntityBController } from './entity-b.controller';
import { EntityBService } from './entity-b.service';

describe('EntityBController', () => {
  let controller: EntityBController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntityBController],
      providers: [EntityBService],
    }).compile();

    controller = module.get<EntityBController>(EntityBController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
