import { IsNotEmpty, IsString } from "class-validator";

export class CreateCvDto {

 
    @IsNotEmpty()
    @IsString()
    Title : string;
    
    @IsNotEmpty()
    @IsString()
    Description : string ;

    @IsNotEmpty()
    @IsString()
    About: string;
    
    @IsNotEmpty()
    @IsString()
    Job: string;

    @IsNotEmpty()
    @IsString()
    Experience: string;
    
    @IsNotEmpty()
    @IsString()
    Skills: string;
    
    @IsNotEmpty()
    @IsString()
    Languages: string ;
    
    @IsNotEmpty()
    @IsString()
    Certifications: string;
    
    @IsNotEmpty()
    @IsString()
    PsychoTechnicalProfile: string ;
    
    @IsNotEmpty()
    @IsString()
    Education: string;
    
    @IsNotEmpty()
    @IsString()
    ProfessionalExperience: string;




}
