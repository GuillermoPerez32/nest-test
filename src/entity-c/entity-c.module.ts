import { Module } from '@nestjs/common';
import { EntityCService } from './entity-c.service';
import { EntityCController } from './entity-c.controller';

@Module({
  controllers: [EntityCController],
  providers: [EntityCService]
})
export class EntityCModule {}
