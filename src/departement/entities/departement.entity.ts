//import { UserEntity } from 'src/user/entites/UserEntity';
//import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class Departement {
    @PrimaryGeneratedColumn()
    Id_departement: number;
    
    @Column()
    name:string;

  /*  
    @OneToOne(() => User, (user)=>user.departement, 
    {
        cascade : ['insert','update'],
        nullable : true,
        eager : true
    })
    user: User;
 */
}
