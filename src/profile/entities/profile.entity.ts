//import { UserEntity } from "src/user/entites/UserEntity";

import { UserEntity } from "src/user/entites/UserEntity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
   
  Id_profile: number;
   
    @Column({
      name:'address',
      length: 500,
  })
  address : string;

  @Column()
  age : number;

  @Column()
  cin : number;

  @Column()
  job: string;

  @Column()
  path : string; 


 
     // relation in table user and table Profile 

   @OneToOne( 
        type => UserEntity, 
       (user) => user.profile,
       {
           cascade : ['insert','update',],
           nullable : true,
           eager : true
       }
       )

       @JoinColumn({
        name: "iduser",
        referencedColumnName: "id"
      })
   user : UserEntity;
   
}