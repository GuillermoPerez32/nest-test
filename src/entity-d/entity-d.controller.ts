import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityDService } from './entity-d.service';
import { CreateEntityDDto } from './dto/create-entity-d.dto';
import { UpdateEntityDDto } from './dto/update-entity-d.dto';

@Controller('entity-d')
export class EntityDController {
  constructor(private readonly entityDService: EntityDService) {}

  
}
