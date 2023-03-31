
import { Departement } from 'src/departement/entities/departement.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    Id_user: number;
    
    @Column()
    Username: string;
    
    @Column()
    Password: string;
    
    @Column()
    Email:string;
    
    @Column()
    Job:string;
    
    @Column()
    Rôle : string;

    
    @OneToOne(() => Departement, (departement)=>departement.user)
    @JoinColumn({
      name: "Id_departement",
      referencedColumnName: "Id_departement"
    })
    departement: Departement;

}
