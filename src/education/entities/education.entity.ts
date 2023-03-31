import { Cv } from 'src/cv/entities/cv.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Education {
    @PrimaryGeneratedColumn()
    Id_education : number;
    
    @Column()
    Diploma : string; 
    
    @Column()
    University : string;


    /*
Relation entre table Cv et table Educations
*/
@ManyToMany(
    () => Cv,
    cv => cv.educations,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  cvs?: Cv[];
}
