import { Injectable ,NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRegisterDto } from './dto/UserRegisterDto';
import { UserEntity } from './entites/UserEntity';
import * as bcrypt from 'bcrypt';
import { LoginCredentialDto } from './dto/LoginCredentialDto';
import { JwtService } from '@nestjs/jwt/dist';




@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository : Repository<UserEntity>,
        private jwtService : JwtService /////Auth Passport Jwt Strategie
        ){}


        
   async register(userData : UserRegisterDto) : Promise<Partial<UserEntity>>{
      
       
        const user = this.userRepository.create({
           ...userData // recup tt les info userRegisterDto
        });

        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, user.salt);

        try{
            await this.userRepository.save(user);
        }catch (e) {
            throw new NotFoundException(`le username et le password il doit etre unique`);
        }
       

         
        return  {
          id: user.id,
          username :user.username,
          email : user.email,
          password : user.password
          };


    }


    async login(credentials : LoginCredentialDto){
        // Recupére le login et le mot de passe
        const {username, password} = credentials;

        // on peut se logger ou via le username ou le pwd

        // Vérifier est ce quil ya un user avec ce login ou ce pwd 
        const user = await this.userRepository.createQueryBuilder("user")
                            .where("user.username = :username ", {username})
                            .orWhere("user.password = :password", { password })
                            .getOne();


               // console.log(user);
         //si not user je déclanche une erreur
         
         if(!user){
            throw new NotFoundException('username ou password erronée ...');
         }
        
         // Si oui je vérifié est ce que le mot de passe est corrrécte ou pas 
          const  hashedPassword = await bcrypt.hash(password,user.salt);
          if(hashedPassword === user.password){
            // get info saisie par login
           const payload = {
            username: user.username,
             email: user.email,
              role : user.role
            };
           
           //Auth Passport Jwt Strategie token
          const jwt = await this.jwtService.sign(payload);

            return {

               payload,
                "access_token" :jwt};
          
        }else{
            // si le mot de passse incorrect je déclanchée une erreur
            throw new NotFoundException('username ou password erronée ');
        }
        


    }





}
