
import { Cv } from "src/cv/entities/cv.entity";
import { UserRoleEnum } from "src/enum/userRole.enum";

import { Profile } from "src/profile/entities/profile.entity";
import { Project } from "src/project/entities/project.entity";
import { Entity ,PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, OneToOne, ManyToMany, JoinTable} from "typeorm";

@Entity('user')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length :50,
        unique:true
    })
    username : string;

    @Column({
        unique: true
    })
    email : string;

    @Column()
    password : string;
    
    @Column()
    salt: string;

    @Column(
        {
            type : 'enum',
            enum:UserRoleEnum,
            default : UserRoleEnum.USER
        }
    )
    role : string;




    


   
      // relation in table User  and table profile  one to one
      
  
      @OneToOne( 
        type => Profile,
        (profile) => profile.user,
        {
          
           nullable : true,
           cascade : true
        }
        
        )
   profile :Profile[]; 


   // relation in table User  and table project  Many to Many
/*
   
@ManyToMany(
    () => Project ,
    project => project.userE, //optional
    {cascade: true})
    @JoinTable({
      name: 'user_project ',
      joinColumn: {
        name: 'iduser',
        referencedColumnName: 'id',
      },
      inverseJoinColumn: {
        name: 'Id_project',
        referencedColumnName: 'Id_project',
      },
    })
    project?: Project[];  
  
  */
// relation in table User  and table Cv  One To many


      
@OneToMany( 
  type => Cv,
  (cv) => cv.user,
  {
    
     nullable : true,
     cascade : true
  }
  
  )
  cv? :Cv[];      
     
 
     // relation in table User  and table project  Many to one


      
      @OneToMany( 
        type => Project,
        (project) => project.user,
        {
          
           nullable : true,
           cascade : true
        }
        
        )
        project :Project[];      
           
       
   
    

}


