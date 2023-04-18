import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entites/UserEntity';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { JwtStrategy } from './strategy/jwtstrategy';


dotenv.config();
@Module({
  imports:[TypeOrmModule.forFeature([UserEntity]),
  //Auth Passport Jwt Strategie token
  PassportModule.register({defaultStrategy : 'jwt' } ),
    
  JwtModule.register(
                {secret: process.env.SECRET, signOptions: {expiresIn: 3600} } 
                )
                       
 //
  ],
  controllers: [UserController],
  providers: [UserService,JwtStrategy],
  exports:[UserService]
})
export class UserModule {}
