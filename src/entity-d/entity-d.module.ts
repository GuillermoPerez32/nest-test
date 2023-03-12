import { Module } from '@nestjs/common';
import { EntityDService } from './entity-d.service';
import { EntityDController } from './entity-d.controller';

@Module({
  controllers: [EntityDController],
  providers: [EntityDService]
})
export class EntityDModule {}
