import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { EntityA } from './entities/entity-a.entity';
import { EntityAService } from './entity-a.service';

@Controller('entity-a')
@Crud({
  model: {type: EntityA},
})
export class EntityAController {
  constructor(private readonly entityAService: EntityAService) {}
}
