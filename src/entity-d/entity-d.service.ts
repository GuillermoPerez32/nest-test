import { Injectable } from '@nestjs/common';
import { CreateEntityDDto } from './dto/create-entity-d.dto';
import { UpdateEntityDDto } from './dto/update-entity-d.dto';

@Injectable()
export class EntityDService {
  create(createEntityDDto: CreateEntityDDto) {
    return 'This action adds a new entityD';
  }

  findAll() {
    return `This action returns all entityD`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entityD`;
  }

  update(id: number, updateEntityDDto: UpdateEntityDDto) {
    return `This action updates a #${id} entityD`;
  }

  remove(id: number) {
    return `This action removes a #${id} entityD`;
  }
}
