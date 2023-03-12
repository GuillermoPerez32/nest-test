import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityCService } from './entity-c.service';
import { CreateEntityCDto } from './dto/create-entity-c.dto';
import { UpdateEntityCDto } from './dto/update-entity-c.dto';

@Controller('entity-c')
export class EntityCController {
  constructor(private readonly entityCService: EntityCService) {}

}
