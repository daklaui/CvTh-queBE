import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class CreateProfileDto {

  
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
    @Min(8)
    @Max(8)
    cin : number;


    @IsOptional()
    @IsString()
    job: string;

    @IsOptional()
    @IsString()
    path : string; 


   
 
  
}