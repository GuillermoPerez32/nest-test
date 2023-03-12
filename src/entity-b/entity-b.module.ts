import { Module } from '@nestjs/common';
import { EntityBService } from './entity-b.service';
import { EntityBController } from './entity-b.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityB } from './entities/entity-b.entity';

@Module({
  controllers: [EntityBController],
  providers: [EntityBService],
  imports: [ TypeOrmModule.forFeature([EntityB])]
})
export class EntityBModule {}
