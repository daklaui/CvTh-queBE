import { Cv } from 'src/cv/entities/cv.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class ProfessionalExperience {

    @PrimaryGeneratedColumn()
    Id_experience : number;
    
    @Column()
     Year : Date;
    
    @Column()
    Job : string;

    @Column()
    Entreprise : string;

/*
Relation entre table Cv et table ProfessionalExperience
*/
    @ManyToMany(
        () => Cv,
        cv => cv.professionalExperiences,
        {onDelete: 'CASCADE', onUpdate: 'CASCADE',},
      )
      cvs?: Cv[];

}
