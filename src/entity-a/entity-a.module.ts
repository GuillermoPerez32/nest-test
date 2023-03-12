import { Module } from '@nestjs/common';
import { EntityAService } from './entity-a.service';
import { EntityAController } from './entity-a.controller';

@Module({
  controllers: [EntityAController],
  providers: [EntityAService]
})
export class EntityAModule {}
