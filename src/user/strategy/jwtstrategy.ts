
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { PayloadInterface } from '../interfaces/PayloadInterface';
import { Repository } from 'typeorm';
import { UserEntity } from '../entites/UserEntity';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import * as dotenv from 'dotenv';
import { InjectRepository } from '@nestjs/typeorm';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository : Repository<UserEntity>         
    )
  
  {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET,
    });
  }

  async validate(payload: PayloadInterface) : Promise<any>{

    console.log(payload);
    //j ai récupere mon user {where: {id : id }}
    const user = await this.userRepository.findOne({where :{username: payload.username}});

    // si le user existe je le retourne et la automtiquement ce que je retourne dans validite
    //est mis dans le requet

    if(user){
     /*  const {password , salt , ...result} = user;

       return result;*/


       delete user.salt;
       delete user.password;

       return user; 


    }else {
        //Si non je déclenche une erreur
        throw new UnauthorizedException();
    }

  }
}
