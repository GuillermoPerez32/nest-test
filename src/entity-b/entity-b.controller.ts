import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityBService } from './entity-b.service';
import { CreateEntityBDto } from './dto/create-entity-b.dto';
import { UpdateEntityBDto } from './dto/update-entity-b.dto';
import { Crud,CrudController } from '@nestjsx/crud';
import { EntityA } from 'src/entity-a/entities/entity-a.entity';
import { EntityAService } from 'src/entity-a/entity-a.service';
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