
import { Cv } from 'src/cv/entities/cv.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class SpokenLanguage {


    @PrimaryGeneratedColumn()
    Id_language: number;
    
    

    @Column()
    Name : string;



    
/*
Relation entre table Cv et table SpokenLanguage
*/
@ManyToMany(
    () => Cv,
    cv => cv.spokenlanguages,
    {onDelete: 'CASCADE', onUpdate: 'CASCADE',},
  )
  cvs?: Cv[];


}
