import { Controller, Post,Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterDto } from './dto/UserRegisterDto';
import { UserEntity } from './entites/UserEntity';
import { LoginCredentialDto } from './dto/LoginCredentialDto';



@Controller('user')
export class UserController {

   constructor(private userService : UserService){}


   @Post('register')
   async register( @Body() userData : UserRegisterDto): Promise<Partial<UserEntity>> {
      return this.userService.register(userData) ;
   }
      
   
   @Post('login')
   async login( @Body() Credential : LoginCredentialDto) {
      return this.userService.login(Credential) ;
   }
      
}
