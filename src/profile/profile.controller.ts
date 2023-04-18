import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './entities/profile.entity';
import { CreateProfileDto } from './dto/create-profile.dto';

import { User } from 'src/decortors/userdecorator';
import { JwtAuthGuard } from 'src/user/guards/JwtAuthGuard';
import { UpdateProfileDto } from './dto/update-profile.dto';



@Controller('profile')
export class ProfileController {

    constructor(private   profileService : ProfileService){}


    ////////////////////////////////////
  // cherche le nbre des Profiles par age 
  @Get('/stats')
  @UseGuards(JwtAuthGuard)
  async statprofileNbreByAge(){
      
      return await this.profileService.statprofileNbreByAge();
  }
    
 /////////// add profile in user ///////////

 @Post()
 @UseGuards(JwtAuthGuard)
 async AddProfile(@Body() createprofiledto : CreateProfileDto, 
               
          @User() user,
            ) : Promise<Profile>{
            
           //  const user = <UserRegisterDto>req.user;
           console.log('le user est' , user);
     return await this.profileService.addProfile(createprofiledto,user);

 }

 /////////Update Profile ////////

 @Patch(':id')
 @UseGuards(JwtAuthGuard)
 async UpdateProfile(
     @Param('id',ParseIntPipe) id : number,
     @Body() updateprofiledto : UpdateProfileDto ,
     ) : Promise<Profile>{
   
     return await this.profileService.UpdateProfile(id ,updateprofiledto );

 }


    // //////////////  Autre  methode update par champ string //////////////////
    @Patch()
    @UseGuards(JwtAuthGuard)
    async UpdateProfile2(
        @Body() updateObject ,
        @User() user,
        ) {
      const {updatejob,UpdateProfileDto} = updateObject
        return await this.profileService.UpdateProfile2(updatejob , UpdateProfileDto );

    }
 


 
 ///////////Select All Profile in the user //////////

 @Get()
 @UseGuards(JwtAuthGuard) //cistumser droit access user
async  getAllProfiles(
//  @Req() request : any,  // remplacer par un  decorator User
   @User() user,
 ) : Promise<Profile[]>{
 // const user = request.user;
  console.log(user);
 return await this.profileService.getProfiles(user);
     
 }
 

 /////////Select Profile by Id user //////////

 @Get(":Id_profile")
 @UseGuards(JwtAuthGuard)
 async  findProfileById(@Param('Id_profile', ParseIntPipe) Id_profile : number,
                  @User() user,) : Promise<Profile>{

  return await this.profileService.findProfileById(Id_profile,user);
      
  }


    ///////////Delete Profile By Id user ////////

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async softDeleteProfile(
        @Param('id', ParseIntPipe) id : number)
        {

        return await this.profileService.softDeleteProfile(id);
    }


    /*
        autre methode remove
    @Delete(':id')
    async removeCv(
        @Param('id', ParseIntPipe) id : number)
        {

        return await this.cvService.removeCv(id);
    }

    */

  ////////////////////////////////
 /*   @Delete(':id')
    async removeCv(
        @Param('id', ParseIntPipe) id : number)
        {

        return await this.cvService.deleteCv(id);
    }

 ////////////////////////////////

    @Delete(':id')
    async softremoveCv(
        @Param('id', ParseIntPipe) id : number)
        {

        return await this.cvService.softRemoveCv(id);
    }


    ////////////////////////////////

    @Get('recover/:id')
    async recoverCv(
        @Param('id', ParseIntPipe) id : number)
        {

        return await this.cvService.recoverCv(id);
    }
*/
    ////////////////////////////////


}
