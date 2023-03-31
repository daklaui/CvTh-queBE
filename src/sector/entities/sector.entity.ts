
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sector {

    @PrimaryGeneratedColumn()
    Id_secteur : number;

    @Column()
    Name : string;



}