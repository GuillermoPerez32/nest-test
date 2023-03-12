import { Injectable } from '@nestjs/common';
import { CreateEntityBDto } from './dto/create-entity-b.dto';
import { UpdateEntityBDto } from './dto/update-entity-b.dto';

@Injectable()
export class EntityBService {
  create(createEntityBDto: CreateEntityBDto) {
    return 'This action adds a new entityB';
  }

  findAll() {
    return `This action returns all entityB`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entityB`;
  }

  update(id: number, updateEntityBDto: UpdateEntityBDto) {
    return `This action updates a #${id} entityB`;
  }

  remove(id: number) {
    return `This action removes a #${id} entityB`;
  }
}
