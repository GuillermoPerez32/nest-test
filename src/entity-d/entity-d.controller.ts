import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityDService } from './entity-d.service';
import { CreateEntityDDto } from './dto/create-entity-d.dto';
import { UpdateEntityDDto } from './dto/update-entity-d.dto';

@Controller('entity-d')
export class EntityDController {
  constructor(private readonly entityDService: EntityDService) {}

  @Post()
  create(@Body() createEntityDDto: CreateEntityDDto) {
    return this.entityDService.create(createEntityDDto);
  }

  @Get()
  findAll() {
    return this.entityDService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entityDService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntityDDto: UpdateEntityDDto) {
    return this.entityDService.update(+id, updateEntityDDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityDService.remove(+id);
  }
}
