
import { Cv } from 'src/cv/entities/cv.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Skill {

    @PrimaryGeneratedColumn()
    Id_skill :number;

    @Column()
     DEV : string;
     
     @Column()
     Database :string;
     
     @Column()
     Virtualization :string;
     
     @Column()
     VCSDevops :string;
     
     @Column()
     Level :string;

/*
Relation entre table Cv et table Skill
*/
     @ManyToMany(
        () => Cv,
        cv => cv.skills,
        {onDelete: 'CASCADE', onUpdate: 'CASCADE',},
      )
      cvs?: Cv[];



  /*
  */
 


        

}
