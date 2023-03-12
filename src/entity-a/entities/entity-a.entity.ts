import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EntityA {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    entityAField1:string;


    @Column('integer')
    entityAField2:number;
}