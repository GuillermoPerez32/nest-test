import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityAService } from './entity-a.service';
import { CreateEntityADto } from './dto/create-entity-a.dto';
import { UpdateEntityADto } from './dto/update-entity-a.dto';
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
