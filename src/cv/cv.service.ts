import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cv } from './entities/cv.entity';
import { Repository } from 'typeorm';
import { UserRoleEnum } from 'src/enum/userRole.enum';
import { Certificate } from 'crypto';
import { Skill } from 'src/skill/entities/skill.entity';
import { User } from 'src/decortors/userdecorator';


  @Injectable()
  export class CvService {
      constructor(
          @InjectRepository(Cv)
          private cvRepository : Repository<Cv>,
        
          ) {}

               /////////Create Cv///////////
        
        async addCv(createcvDto: CreateCvDto , user ) : Promise<Cv>{
        
        const newcv = this.cvRepository.create(createcvDto);
        newcv.user = user;
        return await this.cvRepository.save(newcv);
        
        
        }    
        
                 ////////Get All Cv////////////
        
        async getCv(user,): Promise<Cv[]>{
        
        if(user.role === UserRoleEnum.USER){
        return await this.cvRepository.find(user);
        }
        
        }
                 ///////Find Cv by Id//////
        
          
        async findCVById (Id_cv : number, user)     {
        
        const projectuser= await  this.cvRepository.findOne({where: {Id_cv : Id_cv }});
        
        if (!projectuser){
          throw new NotFoundException(`le Project d'id ${Id_cv} n'existe pas`);
        } 
        if(user.role === UserRoleEnum.ADMIN || (projectuser.user && projectuser.user.id === user.id)){
        return projectuser;
        
        }else{
        throw new NotFoundException(`le Project d'id ${Id_cv} n'existe pas`);
        }
        
        }
        
        
        
        
        }
        

  
  
  