import { Injectable } from '@nestjs/common';
import { CreateEntityADto } from './dto/create-entity-a.dto';
import { UpdateEntityADto } from './dto/update-entity-a.dto';

@Injectable()
export class EntityAService {
  create(createEntityADto: CreateEntityADto) {
    return 'This action adds a new entityA';
  }

  findAll() {
    return `This action returns all entityA`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entityA`;
  }

  update(id: number, updateEntityADto: UpdateEntityADto) {
    return `This action updates a #${id} entityA`;
  }

  remove(id: number) {
    return `This action removes a #${id} entityA`;
  }
}
