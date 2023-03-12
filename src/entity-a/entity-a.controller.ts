import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityAService } from './entity-a.service';
import { CreateEntityADto } from './dto/create-entity-a.dto';
import { UpdateEntityADto } from './dto/update-entity-a.dto';

@Controller('entity-a')
export class EntityAController {
  constructor(private readonly entityAService: EntityAService) {}

  @Post()
  create(@Body() createEntityADto: CreateEntityADto) {
    return this.entityAService.create(createEntityADto);
  }

  @Get()
  findAll() {
    return this.entityAService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entityAService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntityADto: UpdateEntityADto) {
    return this.entityAService.update(+id, updateEntityADto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityAService.remove(+id);
  }
}
