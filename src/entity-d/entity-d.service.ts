import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EntityD } from './entities/entity-d.entity';

@Injectable()
export class EntityDService extends TypeOrmCrudService<EntityD>{
  constructor( @InjectRepository(EntityD) public repo) {
    super(repo)
  }
}
