import { EntityB } from "src/entity-b/entities/entity-b.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class EntityA {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    entityAField1:string;


    @Column('integer')
    entityAField2:number;

    @OneToMany(
        () => EntityB,
        (entityb) => entityb.entityA,
    )
    entitiesB: EntityB[];
}