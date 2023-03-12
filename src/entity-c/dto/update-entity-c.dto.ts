import { PartialType } from '@nestjs/swagger';
import { CreateEntityCDto } from './create-entity-c.dto';

export class UpdateEntityCDto extends PartialType(CreateEntityCDto) {}
