

import { Activite } from 'src/activite/entities/activite.entity';
import { Cv } from 'src/cv/entities/cv.entity';
import { ResponsablePole } from 'src/responsable-pole/entities/responsable-pole.entity';
import { Sector } from 'src/sector/entities/sector.entity';
import { UserEntity } from 'src/user/entites/UserEntity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';

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
Relation entre table User et table Project
*/
/*
@ManyToMany(
  () => UserEntity,
  userE => userE.project,
  {onDelete: 'CASCADE', onUpdate: 'CASCADE',},
)
userE?: UserEntity[];


*/

//Relation entre table User et table Project

@ManyToOne( 
  type => UserEntity, 
 (user) => user.project,
 {
     cascade : ['insert','update',],
     nullable : true,
     eager : true
 }
 )
user : UserEntity;



  /*
  */
 
  @ManyToOne(() => Sector, (sector)=>sector.project,{cascade:true})
  @JoinColumn({
    name: "Id_sector",
    referencedColumnName: "Id_sector"
  })
  sector: Sector[];


   /*
  */
 
   @ManyToOne(() => ResponsablePole, (responsablepole)=>responsablepole.project,{cascade:true})
   @JoinColumn({
     name: "Id_ResponsablePole",
     referencedColumnName: "Id_ResponsablePole"
   })
   responsablepole: ResponsablePole[];



  /*
*/
     
@OneToMany(() => Activite, (activite)=>activite.projectactiv,
{onDelete: 'CASCADE', onUpdate: 'CASCADE',})
activiteProj: Activite;



}
