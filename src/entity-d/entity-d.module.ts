import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityDService } from './entity-d.service';
import { EntityDController } from './entity-d.controller';
import { EntityD } from './entities/entity-d.entity';

@Module({
  controllers: [EntityDController],
  providers: [EntityDService],
  imports: [TypeOrmModule.forFeature([EntityD])]
})
export class EntityDModule {}
