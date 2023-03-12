import { PartialType } from '@nestjs/swagger';
import { CreateEntityADto } from './create-entity-a.dto';

export class UpdateEntityADto extends PartialType(CreateEntityADto) {}
