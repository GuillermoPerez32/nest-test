import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CreateEntityBDto } from './dto/create-entity-b.dto';
import { UpdateEntityBDto } from './dto/update-entity-b.dto';
import { EntityB } from './entities/entity-b.entity';

@Injectable()
export class EntityBService extends TypeOrmCrudService<EntityB>{
  constructor( @InjectRepository(EntityB) public repo) {
    super(repo)
  }
}