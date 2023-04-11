
import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Departement } from 'src/departement/entities/departement.entity';
import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert, ManyToMany, JoinTable, OneToMany, ManyToOne, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';


enum Roles {
  user = 'user',
  admin ='admin',
}


@Entity()
export class User {
  @PrimaryGeneratedColumn()
    Id_user: number;
    
    @Column()
    username: string;
    

    @IsNotEmpty()
    @Column()
    password: string;
   /* @BeforeInsert()
    async hashPassword() {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }*/

 

    
    @IsEmail()
    @Column()
    email:string;
    
    @Column()
    job:string;
    
    @Column({type:'enum',enum: Roles, default: Roles.user})
     role : Roles;

/*
     @Column({name:'refreshtoken' })
     refreshToken: string;

     @Column({ type: 'date', name:'refreshtokenexp' })
     refreshTokenExp: string;
    */
     @CreateDateColumn()
     @Exclude()
     public createdAt: Date;

     @UpdateDateColumn()
     @Exclude()
      public updatedAt: Date;

     //Relation in table user and table departement
     
    @OneToOne(() => Departement, (departement)=>departement.user)
    @JoinColumn({
      name: "Id_departement",
      referencedColumnName: "Id_departement"
    })
    departement: Departement;

}
