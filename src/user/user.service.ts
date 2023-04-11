import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository, getRepository } from 'typeorm';

//////////// parti Auth
import { LoginDTO, RegisterDTO  } from 'src/auth/auth.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
 
  constructor(@InjectRepository(User) private userRepo : Repository<User>){}
 

  async create(userData: CreateUserDto) {
    const newUser = await this.userRepo.create(userData);
    await this.userRepo.save(newUser);
    return newUser;
  }


///


 
  findAll(): Promise<any> {
    return this.userRepo.find();
  }

  findOne(id: number) :Promise<CreateUserDto>{
    return this.userRepo.findOne({where: {Id_user : id }});
  }

 


  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepo.update(id,updateUserDto);
  }

  remove(id: number) : Promise<any> {
    return this.userRepo.delete(id);
  }



  findByUsername(username: string): Promise<User | undefined> {
    return this.userRepo.findOne({where: {username} }); 
}
 //or

 findByUsername2(username: string): Promise<User | undefined> {
  const user = getRepository(User)
    .createQueryBuilder("user")
    .where("user.username = :username", { username: username })
    .getOne();

  return user;
}

//fin or


//////////// parti Auth

//Inside the class, define a method for creating a new user:

// create a new user
async createUser(userDTO: RegisterDTO): Promise < User > {
  // get email from the input
  const { email } = userDTO;
  // check a user with that email
  const user = await this.userRepo.findOne({ where:{email} });
  // Check if user already exists
  if(user) {
      // User already exists
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
  }
      
  const createdUser = await this.userRepo.create(userDTO);
    await this.userRepo.save(createdUser);
    return createdUser;
}

//Inside the class, define a method for logging a user in:

async findByLogin(userDTO: LoginDTO): Promise < User > {
  const { email, password } = userDTO; // Get the email and password.
  // find user by email
  const user = await ((await this.userRepo.findOne({ where:{email,password} })));
  if(!user) { // Check if user exists
      // User not found
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
  }
      // check if password is correct
  /*    
      const passworMatch = await bcrypt.compare(password, user.password);
  if(!passworMatch) {
      // Invalid credentials
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
  }

  */
      // return the user
      return user;
}

//Inside the class, define a method for finding a user via Jwt’s payload:

async findByPayload(payload: any) {
  // Extract email from payload
  const { email } = payload;
  // Get user from the email
  const user = await this.userRepo.findOne({ where:{email} });
  // return the user
  return user;
}


}
