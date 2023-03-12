import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityCService } from './entity-c.service';
import { CreateEntityCDto } from './dto/create-entity-c.dto';
import { UpdateEntityCDto } from './dto/update-entity-c.dto';

@Controller('entity-c')
export class EntityCController {
  constructor(private readonly entityCService: EntityCService) {}

  @Post()
  create(@Body() createEntityCDto: CreateEntityCDto) {
    return this.entityCService.create(createEntityCDto);
  }

  @Get()
  findAll() {
    return this.entityCService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entityCService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntityCDto: UpdateEntityCDto) {
    return this.entityCService.update(+id, updateEntityCDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityCService.remove(+id);
  }
}
