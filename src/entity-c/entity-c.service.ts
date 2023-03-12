import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EntityC } from './entities/entity-c.entity';

@Injectable()
export class EntityCService extends TypeOrmCrudService<EntityC>{
  constructor( @InjectRepository(EntityC) public repo) {
    super(repo)
  }
}
