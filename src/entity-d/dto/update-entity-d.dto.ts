import { PartialType } from '@nestjs/swagger';
import { CreateEntityDDto } from './create-entity-d.dto';

export class UpdateEntityDDto extends PartialType(CreateEntityDDto) {}
