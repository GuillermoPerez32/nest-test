import { EntityC } from "src/entity-c/entities/entity-c.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EntityD {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    entityDField1: string;

    @Column('integer')
    entityDField2: number;

    @ManyToMany(
        ()=> EntityC,
        (entityC)=> entityC.entitiesD,
        {
            cascade: ['insert', 'remove', 'soft-remove'],
            onUpdate: 'RESTRICT',
        }
    )
    @JoinTable({
        name: 'entityC_entityD',
        joinColumn: { name: 'entityD_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'entityC_id', referencedColumnName: 'id'},
    })
    entitiesC: EntityC[];
}