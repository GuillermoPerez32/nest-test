import { Controller } from '@nestjs/common';
import { EntityAService } from './entity-a.service';
import { Crud,CrudController } from '@nestjsx/crud';
import { EntityA } from './entities/entity-a.entity';

@Crud({
  model : {type: EntityA},
  validation: {
    forbidUnknownValues: false,
  },
  query: {
    join: {
      entitiesB : {
        alias: 'entitiesB',
        eager: true
      }
    }
  }
})
@Controller('entity-a')
export class EntityAController implements CrudController<EntityA>{
  constructor(public service: EntityAService) {}
}
