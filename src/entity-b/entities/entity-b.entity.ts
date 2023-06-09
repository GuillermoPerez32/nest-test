import { EntityA } from "src/entity-a/entities/entity-a.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class EntityB {

    @PrimaryGeneratedColumn({})
    id: number;

    @Column('text')
    entityBField1:string;


    @Column('integer')
    entityBField2:boolean;

    @ManyToOne(
        ()=> EntityA,
        (entityA)=> entityA.entitiesB,
        {onUpdate: 'RESTRICT', onDelete: 'CASCADE'}
    )
    entityA: EntityA;
}
