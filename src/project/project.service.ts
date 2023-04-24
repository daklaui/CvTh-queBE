import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRoleEnum } from 'src/enum/userRole.enum';

@Injectable()
export class ProjectService {
  create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }

  constructor(
    @InjectRepository(Project)
    private projectRepository : Repository<Project>
    ) {}



       /////////Create Project///////////

async addProject(createProjectDto: CreateProjectDto , user ) : Promise<Project>{

const newproject = this.projectRepository.create(createProjectDto);
newproject.user = user;
return await this.projectRepository.save(newproject);


}    

         ////////Get All Project////////////

async getProject(user,): Promise<Project[]>{

if(user.role === UserRoleEnum.USER){
return await this.projectRepository.find(user);
}

}
         ///////Find Project by Id//////

  
async findProjectById (Id_project : number, user)     {

const projectuser= await  this.projectRepository.findOne({where: {Id_project : Id_project }});

if (!projectuser){
  throw new NotFoundException(`le Project d'id ${Id_project} n'existe pas`);
} 
if(user.role === UserRoleEnum.ADMIN || (projectuser.user && projectuser.user.id === user.id)){
return projectuser;

}else{
throw new NotFoundException(`le Project d'id ${Id_project} n'existe pas`);
}

}




}
