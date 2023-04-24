import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';
import { UserRoleEnum } from 'src/enum/userRole.enum';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {

    constructor(
        @InjectRepository(Profile)
        private profileRepository : Repository<Profile>
        ) {}

 ////////////////////////////////
 async getProfiles(user,): Promise<Profile[]>{
        
    if(user.role === UserRoleEnum.USER){
      return await this.profileRepository.find(user);
    }
    
}
    ///////////////////////////////

      
    async findProfileById (Id_profile : number, user)     {
       
        

        const profileuser= await  this.profileRepository.findOne({where: {Id_profile : Id_profile }});

        if (!profileuser){
          throw new NotFoundException(`le Profile d'id ${Id_profile} n'existe pas`);
       } 
       if(user.role === UserRoleEnum.ADMIN || (profileuser.user && profileuser.user.id ===user.id)){
        return profileuser;

      }else{
        throw new NotFoundException(`le Profile d'id ${Id_profile} n'existe pas`);
      }
        
       }


           ////////////////////////////////
           async addProfile(createprofiledto : CreateProfileDto , user ) : Promise<Profile>{

            const newProfile = this.profileRepository.create(createprofiledto);
               newProfile.user = user;
               return await this.profileRepository.save(newProfile);
            //   return await this.cvRepository.save(createprofiledto);
   
           }
   
           
         ////////////////////////////////
        async UpdateProfile(Id_profile: number , updateprofiledto : UpdateProfileDto) : Promise<Profile>{
            // on le récuper le cv did  et ensite  on remplace les anciens valeurs 
            // par ceux du cv passe en parametre
            const newprofile = await this.profileRepository.preload({Id_profile, ...updateprofiledto })
            
            // test le cas ou le cv d id n'existe pas 
             if (!newprofile){
                throw new NotFoundException(`le profile d'id ${Id_profile} n'existe pas`);
             }
            // sauvgarder la nouvelle entite donc le nouveau cv
            return await this.profileRepository.save(newprofile);

        }


        
            ////////////////////////////////

        // Autre methode update par champ string
       async UpdateProfile2(updatejob , updateprofiledto : UpdateProfileDto){
        return  this.profileRepository.update(updatejob, updateprofiledto);
    }
     



        /// ////////////////////////////
         
        async softDeleteProfile(id : number){

               
          return await this.profileRepository.softDelete(id);
      }
 
 
 
      async restorprofile (id : number){
     
        return await  this.profileRepository.restore(id);
 
      }
 
 
    ///////////////////////////
    
    // cherche le nbre de Profile dans la table  
 
    async statprofileNbreByAge( ){
      // crée un querBuilder
     const qb = this.profileRepository.createQueryBuilder("profile");
      // cherche le nbre de Profile par age 
              qb.select("profile.age, count(profile.id) as nbreprofile")
              
              .groupBy("profile.age"); 
   
                  
                   console.log(qb.getSql());
                   return await  qb.getRawMany();
 
    }
 
          ////////////////////////////////
         async findOne(id: number) :Promise<CreateProfileDto>{
 
             const profileToGet= await  this.profileRepository.findOne({where: {Id_profile : id }});
 
           if (!profileToGet){
             throw new NotFoundException(`le Profile d'id ${id} n'existe pas`);
          }
 
         return await this.profileRepository.findOne({where: {Id_profile : id }});
 
          }
          ////////////////////////////////



          

    
        /*
        autre methode remove

      async  removeCv (id: number) : Promise<any> {

          const cvToRemove= await  this.findCvById(id);
           return await this.cvRepository.remove(cvToRemove);
        }
      
     

        ////////////////////////////////
        async  deleteCv (id: number)  {

             return await this.cvRepository.delete(id);
          }
         
    
        /// ////////////////////////////
         
        async softRemoveCv(id : number){

             const cvToRemove= await  this.findCvById(id);
             
            return await this.cvRepository.softRemove(cvToRemove);
        }

 

        async recoverCv (id : number){
         const cvToCover= await  this.findCvById(id);
          return await  this.cvRepository.recover(cvToCover);

        }
*/
        

 
}
