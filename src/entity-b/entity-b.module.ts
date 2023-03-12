import { Module } from '@nestjs/common';
import { EntityBService } from './entity-b.service';
import { EntityBController } from './entity-b.controller';

@Module({
  controllers: [EntityBController],
  providers: [EntityBService]
})
export class EntityBModule {}
