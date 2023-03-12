import { Controller } from '@nestjs/common';
import { Crud,CrudController } from '@nestjsx/crud';
import { EntityC } from './entities/entity-c.entity';
import { EntityCService } from './entity-c.service';

@Crud({
  model : {type: EntityC},
  validation: {
    forbidUnknownValues: false,
  },
  query: {
    join: {
      entitiesD : {
        alias: 'entitiesD',
        eager: true,
        allow: []
      }
    }
  },
})
@Controller('entity-c')
export class EntityController implements CrudController<EntityC>{
  constructor(public service: EntityCService) {}
}
