
import { Injectable, UnauthorizedException } from '@nestjs/common';
//Import the necessary modules:
import {sign} from 'jsonwebtoken';

import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}


  ///Inside the class, define a method for creating an authentication token:

  async signPayload(payload: any) {
    // token to expire in 12 hours
    let token = sign(payload, 'secretKey', { expiresIn: '12h' });
    return token;
}


//Inside the class, define a method for validating a user based on the JWT payload:

async validateUser(payload: any) {
  return await this.userService.findByPayload(payload);
}


}
