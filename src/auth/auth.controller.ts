
import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { LoginDTO, RegisterDTO } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private userService: UserService) { }


//Inside the class, define the login route and method:

// login route
@Post('login')
// find the user based on the input data
async login(@Body() userDTO: LoginDTO) {
    const user = await this.userService.findByLogin(userDTO);
    // define a payload
    const payload = {
        email: user.email,
    }
    //get a JWT authentication token from the payload
    const token = await this.authService.signPayload(payload);
    // return the user and the token
    return {
        user, token
    }
}

//Inside the class, define the registration route and method:
// registration route
@Post('register')
async register(@Body() userDTO: RegisterDTO) {
    // Create user based on the input data
    const user = await this.userService.createUser(userDTO);
    // define a payload
    const payload = {
        email: user.email,
    }
    // get a JWT authentication token from the payload
    const token = await this.authService.signPayload(payload);
    // return the user and the token
    return { user, token }
}

}

