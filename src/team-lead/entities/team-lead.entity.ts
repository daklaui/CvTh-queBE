import { Cv } from 'src/cv/entities/cv.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';

@Entity()
export class TeamLead {

    @PrimaryGeneratedColumn()
    Id_TeamLead : number;

      
    @OneToMany(() => Cv, (cv)=>cv.teamlead)
    cv: Cv;
}
