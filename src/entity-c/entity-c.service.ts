import { Injectable } from '@nestjs/common';
import { CreateEntityCDto } from './dto/create-entity-c.dto';
import { UpdateEntityCDto } from './dto/update-entity-c.dto';

@Injectable()
export class EntityCService {
  create(createEntityCDto: CreateEntityCDto) {
    return 'This action adds a new entityC';
  }

  findAll() {
    return `This action returns all entityC`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entityC`;
  }

  update(id: number, updateEntityCDto: UpdateEntityCDto) {
    return `This action updates a #${id} entityC`;
  }

  remove(id: number) {
    return `This action removes a #${id} entityC`;
  }
}
