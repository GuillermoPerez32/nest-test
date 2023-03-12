import { Controller } from '@nestjs/common';
import { Crud,CrudController } from '@nestjsx/crud';
import { EntityD } from './entities/entity-d.entity';
import { EntityDService } from './entity-d.service';

@Crud({
  model : {type: EntityD},
  validation: {
    forbidUnknownValues: false,
  },
  query: {
    join: {
      entitiesC : {
        alias: 'entitiesC',
        eager: true,
        allow: []
      }
    },
  },
})
@Controller('entity-d')
export class EntityDController implements CrudController<EntityD>{
  constructor(public service: EntityDService) {}
}
