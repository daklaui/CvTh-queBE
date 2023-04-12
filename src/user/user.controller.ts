import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

import * as bcrypt from 'bcrypt';
import { Departement } from 'src/departement/entities/departement.entity';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const result =await this.userService.create(createUserDto);
    
    return {
      msg: 'User successfully registered',
      Id_user: result.Id_user,
      username: result.username
    };
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(+id);
  }

  


  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await  this.userService.remove(+id);
  }

// find by name 
 
  @Post(':username')
  async findByUsername(@Param('username') username: string) : Promise<User | undefined>{
    return await this.userService.findByUsername(username);
  }


}
