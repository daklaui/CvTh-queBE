
import { Cv } from 'src/cv/entities/cv.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class PsychoTechincalProfile {
    @PrimaryGeneratedColumn()
    Id_psychotechnicalprofile : number;

    @Column()
     Name_technique :string;

     @Column()
      Level : string;



      /*
Relation entre table Cv et table PsychoTechincalProfile
*/
     @ManyToMany(
        () => Cv,
        cv => cv.psychotechincalprofiles,
        {onDelete: 'CASCADE', onUpdate: 'CASCADE',},
      )
      cvs?: Cv[];
}
