
import { Project } from 'src/project/entities/project.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Sector {

    @PrimaryGeneratedColumn()
    Id_sector : number;

    @Column()
    Name : string;


      
    @OneToMany(() => Project, (project)=>project.sector)
    project: Project;
    





}