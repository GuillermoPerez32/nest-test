import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CreateEntityADto } from './dto/create-entity-a.dto';
import { UpdateEntityADto } from './dto/update-entity-a.dto';
import { EntityA } from './entities/entity-a.entity';

@Injectable()
export class EntityAService extends TypeOrmCrudService<EntityA>{
  constructor( @InjectRepository(EntityA) public repo) {
    super(repo)
  }
}
