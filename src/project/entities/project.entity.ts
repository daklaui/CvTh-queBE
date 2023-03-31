

import { Cv } from 'src/cv/entities/cv.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany } from 'typeorm';

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    Id_project : number;
    
    @Column()
    Name_project : string; 
    
    @Column()
    Description : string;
    
    @CreateDateColumn()
    Date : Date;
    
    @Column()
    Technical_enviroment : string;
     
    @Column()
    Contract_type : string;
    
    @Column()
    Team : string;


    
/*
Relation entre table Cv et table Project
*/
@ManyToMany(
    () => Cv,
    cv => cv.projects,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  cvs?: Cv[];

}
