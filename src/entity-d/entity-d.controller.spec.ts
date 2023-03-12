import { Test, TestingModule } from '@nestjs/testing';
import { EntityDController } from './entity-d.controller';
import { EntityDService } from './entity-d.service';

describe('EntityDController', () => {
  let controller: EntityDController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntityDController],
      providers: [EntityDService],
    }).compile();

    controller = module.get<EntityDController>(EntityDController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
