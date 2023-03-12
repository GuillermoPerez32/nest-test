import { Test, TestingModule } from '@nestjs/testing';
import { EntityAController } from './entity-a.controller';
import { EntityAService } from './entity-a.service';

describe('EntityAController', () => {
  let controller: EntityAController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntityAController],
      providers: [EntityAService],
    }).compile();

    controller = module.get<EntityAController>(EntityAController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
