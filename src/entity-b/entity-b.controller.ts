import { Controller } from '@nestjs/common';
import { EntityBService } from './entity-b.service';
import { Crud,CrudController } from '@nestjsx/crud';
import { EntityB } from './entities/entity-b.entity';

@Crud({
  model : {type: EntityB},
  validation: {
    forbidUnknownValues: false,
  },
  query: {
    join: {
      entityA : {
        alias: 'entityA',
        eager: true
      }
    }
  }
})
@Controller('entity-b')
export class EntityBController implements CrudController<EntityB>{
  constructor(public service: EntityBService) {}
}