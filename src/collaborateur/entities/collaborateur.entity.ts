
import { Activite } from 'src/activite/entities/activite.entity';
import { Cv } from 'src/cv/entities/cv.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Collaborateur {
    
    @PrimaryGeneratedColumn()
    Id_Collaborateur : number;

/*
*/
     
    @OneToMany(() => Cv, (cv)=>cv.collaborateur,{onDelete:'CASCADE',onUpdate:'CASCADE'})
    cv: Cv;



    /*
Relation entre table Collaborateur et table Activite
*/

@ManyToMany(
    () => Activite, 
    activite => activite.collaborateurs, //optional
    {cascade:true},)
    @JoinTable({
      name: 'Collaborateur_Activite',
      joinColumn: {
        name: 'Id_Collaborateur',
        referencedColumnName: 'Id_Collaborateur',
      },
      inverseJoinColumn: {
        name: 'Id_activité',
        referencedColumnName: 'Id_activité',
      },
    })
    activite?: Activite[];  

}
