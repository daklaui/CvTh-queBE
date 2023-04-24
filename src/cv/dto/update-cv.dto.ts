import { PartialType } from '@nestjs/mapped-types';
import { CreateCvDto } from './create-cv.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCvDto extends PartialType(CreateCvDto) {


    @IsOptional()
    @IsString()
    Title : string;
    
    @IsOptional()
    @IsString()
    Description : string ;

    @IsOptional()
    @IsString()
    About: string;
    
    @IsOptional()
    @IsString()
    Job: string;

    @IsOptional()
    @IsString()
    Experience: string;
    
    @IsOptional()
    @IsString()
    Skills: string;
    
    @IsOptional()
    @IsString()
    Languages: string ;
    
    @IsOptional()
    @IsString()
    Certifications: string;
    
    @IsOptional()
    @IsString()
    PsychoTechnicalProfile: string ;
    
    @IsOptional()
    @IsString()
    Education: string;
    
    @IsOptional()
    @IsString()
    ProfessionalExperience: string;

}
