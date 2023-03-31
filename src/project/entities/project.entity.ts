

import { Activite } from 'src/activite/entities/activite.entity';
import { Cv } from 'src/cv/entities/cv.entity';
import { ResponsablePole } from 'src/responsable-pole/entities/responsable-pole.entity';
import { Sector } from 'src/sector/entities/sector.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany, OneToOne, JoinColumn, OneToMany } from 'typeorm';

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



  /*
  */
 
  @OneToOne(() => Sector, (sector)=>sector.project)
  @JoinColumn({
    name: "Id_sector",
    referencedColumnName: "Id_sector"
  })
  sector: Sector[];


   /*
  */
 
   @OneToOne(() => ResponsablePole, (responsablepole)=>responsablepole.project)
   @JoinColumn({
     name: "Id_ResponsablePole",
     referencedColumnName: "Id_ResponsablePole"
   })
   responsablepole: ResponsablePole[];



  /*
*/
     
@OneToMany(() => Activite, (activite)=>activite.projectactiv)
activiteProj: Activite;



}
