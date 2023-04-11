import { Cv } from 'src/cv/entities/cv.entity';
import { Project } from 'src/project/entities/project.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class ResponsablePole {

    
    @PrimaryGeneratedColumn()
    Id_ResponsablePole : number;

      
    @ManyToOne(() => Cv, (cv)=>cv.responsablepole,{onDelete:'CASCADE',onUpdate:'CASCADE'})
    cv: Cv;


       
    @ManyToOne(() => Project, (project)=>project.responsablepole,{onDelete:'CASCADE',onUpdate:'CASCADE'})
    project: Project;
    
    
}
