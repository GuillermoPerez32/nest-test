import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityAModule } from './entity-a/entity-a.module';
import { EntityBModule } from './entity-b/entity-b.module';
import { EntityCModule } from './entity-c/entity-c.module';
import { EntityDModule } from './entity-d/entity-d.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        database: configService.get('DB_NAME'),
        password: configService.get('DB_PASSWORD'),
        port: configService.get('DB_PORT'),
        host: configService.get('DB_HOST'),
        username: configService.get('DB_USERNAME'),
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    EntityAModule,
    EntityBModule,
    EntityCModule,
    EntityDModule,
  ],
})
export class AppModule {}
