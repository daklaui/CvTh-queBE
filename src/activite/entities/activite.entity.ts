import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Activite {

    @PrimaryGeneratedColumn()
    Id_activité :number;

    @Column()
    Description : string;


    

}
