import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Departement {
    @PrimaryGeneratedColumn()
    Id_departement: number;
    
    @Column()
    Name:string;

    
    @OneToMany(() => User, (user)=>user.departement)
    user: User;
 
}
