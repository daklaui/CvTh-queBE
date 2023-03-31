
import { Cv } from 'src/cv/entities/cv.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Certification {
    @PrimaryGeneratedColumn()
    Id_certification : number;
    
    @Column()
    Description :string;

/*
Relation entre table Cv et table Certification
*/
@ManyToMany(
    () => Cv,
    cv => cv.certifications,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  cvs?: Cv[];



/*
*/

@OneToOne(() => Cv, (cv)=>cv.certificationnnn)
@JoinColumn({
  name: "Id_cv",
  referencedColumnName: "Id_cv"
})
cvvc: Cv[];



}
