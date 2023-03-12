import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityBService } from './entity-b.service';
import { CreateEntityBDto } from './dto/create-entity-b.dto';
import { UpdateEntityBDto } from './dto/update-entity-b.dto';

@Controller('entity-b')
export class EntityBController {
  constructor(private readonly entityBService: EntityBService) {}

  @Post()
  create(@Body() createEntityBDto: CreateEntityBDto) {
    return this.entityBService.create(createEntityBDto);
  }

  @Get()
  findAll() {
    return this.entityBService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entityBService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntityBDto: UpdateEntityBDto) {
    return this.entityBService.update(+id, updateEntityBDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityBService.remove(+id);
  }
}
