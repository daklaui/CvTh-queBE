import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { CvService } from './cv.service';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { JwtAuthGuard } from 'src/user/guards/JwtAuthGuard';
import { User } from 'src/decortors/userdecorator';
import { Cv } from './entities/cv.entity';

@Controller('cv')
export class CvController {
    constructor(private   cvService : CvService){}


       
 /////////// add Cv in user ///////////

 @Post()
 @UseGuards(JwtAuthGuard)
 async AddCv(@Body() createcvDto : CreateCvDto, 
               
          @User() user,
            ) : Promise<Cv>{
            
           //  const user = <UserRegisterDto>req.user;
           console.log('le user est' , user);
     return await this.cvService.addCv(createcvDto,user);

 }

 
 ///////////Select All Cv in the user //////////

 @Get()
 @UseGuards(JwtAuthGuard) //cistumser droit access user
async  getAllProject(
//  @Req() request : any,  // remplacer par un  decorator User
   @User() user,
 ) : Promise<Cv[]>{
 // const user = request.user;
  console.log(user);
 return await this.cvService.getCv(user);
     
 }


 

 /////////Select Cv by Id user //////////

 @Get(":Id_project")
 @UseGuards(JwtAuthGuard)
 async  findProfileById(@Param('Id_project', ParseIntPipe) Id_cv : number,
                  @User() user,) : Promise<Cv>{

  return await this.cvService.findCVById(Id_cv,user);
      
  }


}


