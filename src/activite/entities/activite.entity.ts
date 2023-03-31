import { Collaborateur } from 'src/collaborateur/entities/collaborateur.entity';
import { Project } from 'src/project/entities/project.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Activite {

    @PrimaryGeneratedColumn()
    Id_activité :number;

    @Column()
    Description : string;

/*
Relation entre table Collaborateur et table Activite
*/
@ManyToMany(
    () => Collaborateur,
    collaborateur => collaborateur.activite,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  collaborateurs?: Collaborateur[];
    
/*
*/

@OneToOne(() => Project, (project)=>project.activiteProj)
@JoinColumn({
  name: "Id_project",
  referencedColumnName: "Id_project"
})
projectactiv: Project[];
}
