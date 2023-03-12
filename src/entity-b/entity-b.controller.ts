import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityBService } from './entity-b.service';
import { CreateEntityBDto } from './dto/create-entity-b.dto';
import { UpdateEntityBDto } from './dto/update-entity-b.dto';

@Controller('entity-b')
export class EntityBController {
  constructor(private readonly entityBService: EntityBService) {}
}
