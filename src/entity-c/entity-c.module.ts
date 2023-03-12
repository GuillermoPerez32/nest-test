import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityCService } from './entity-c.service';
import { EntityController } from './entity-c.controller';
import { EntityC } from './entities/entity-c.entity';

@Module({
  controllers: [EntityController],
  providers: [EntityCService],
  imports: [TypeOrmModule.forFeature([EntityC])]
})
export class EntityCModule {}
