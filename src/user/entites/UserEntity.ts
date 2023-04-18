
import { UserRoleEnum } from "src/enum/userRole.enum";

import { Profile } from "src/profile/entities/profile.entity";
import { Entity ,PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, OneToOne} from "typeorm";

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


      // relation in table user and table Profile 
      
    @OneToOne( 
         type => Profile,
         (profile) => profile.user,
         {
           
            nullable : true,
            cascade : true
         }
         
         )
    profile :Profile[]; 
           
           
       
   
    

}


