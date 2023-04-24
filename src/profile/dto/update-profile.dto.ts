import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';
import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";
export class UpdateProfileDto  {


    
    @IsOptional()
    @IsString()
    address : string;

    @IsOptional()
    @Type(()=> Number)
    @IsNumber()
    @Min(15)
    @Max(65)
    age : number;

    @IsOptional()
    @Type(()=> Number)
    @IsNumber()
    cin : number;



    @IsOptional()
    @IsString()
    path : string; 

}
