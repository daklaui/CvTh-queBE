import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { UserEntity } from "./UserEntity";
import { Project } from "src/project/entities/project.entity";

@Entity({name:'users_projects'})
export class UsersProjectsEntity {

    @PrimaryColumn({ name: 'iduser' })
    iduser: number;
  
    @PrimaryColumn({ name: 'Id_project' })
    Id_project: number;
  
    @OneToMany(()=> UserEntity, user =>  user.project,
    { onDelete : 'NO ACTION' , onUpdate : 'NO ACTION'}
    )
  
    @JoinColumn([{
      name:'iduser' , 
      referencedColumnName: 'id'
    }])
    user : UserEntity[];
  
    @ManyToOne(()=> Project , project => project.user,
    { onDelete : 'NO ACTION' , onUpdate : 'NO ACTION'}
    )
    @JoinColumn([{
       name :'Id_project',
       referencedColumnName : 'Id_project'
    }])
    project : Project[];
  
  }