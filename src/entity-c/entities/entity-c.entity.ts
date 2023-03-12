import { EntityD } from "src/entity-d/entities/entity-d.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EntityC {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    entityCField1: string;

    @Column('boolean')
    entityCField2: boolean;

    @ManyToMany(
        ()=> EntityD,
        (entityD)=> entityD.entitiesC,
        {
            onUpdate: 'RESTRICT',
            cascade: ['insert', 'soft-remove'],
        }
    )
    entitiesD: EntityD[];
}
