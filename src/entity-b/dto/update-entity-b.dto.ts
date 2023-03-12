import { PartialType } from '@nestjs/swagger';
import { CreateEntityBDto } from './create-entity-b.dto';

export class UpdateEntityBDto extends PartialType(CreateEntityBDto) {}
