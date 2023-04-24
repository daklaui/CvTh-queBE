import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { JwtAuthGuard } from 'src/user/guards/JwtAuthGuard';
import { User } from 'src/decortors/userdecorator';
import { Project } from './entities/project.entity';

@Controller('project')
export class ProjectController {

  constructor(private readonly projectService: ProjectService) {}

    
 /////////// add Project in user ///////////

 @Post()
 @UseGuards(JwtAuthGuard)
 async AddProject(@Body() createProjectDto : CreateProjectDto, 
               
          @User() user,
            ) : Promise<Project>{
            
           //  const user = <UserRegisterDto>req.user;
           console.log('le user est' , user);
     return await this.projectService.addProject(createProjectDto,user);

 }

 
 ///////////Select All Project in the user //////////

 @Get()
 @UseGuards(JwtAuthGuard) //cistumser droit access user
async  getAllProject(
//  @Req() request : any,  // remplacer par un  decorator User
   @User() user,
 ) : Promise<Project[]>{
 // const user = request.user;
  console.log(user);
 return await this.projectService.getProject(user);
     
 }


 

 /////////Select Project by Id user //////////

 @Get(":Id_project")
 @UseGuards(JwtAuthGuard)
 async  findProfileById(@Param('Id_project', ParseIntPipe) Id_project : number,
                  @User() user,) : Promise<Project>{

  return await this.projectService.findProjectById(Id_project,user);
      
  }


}
