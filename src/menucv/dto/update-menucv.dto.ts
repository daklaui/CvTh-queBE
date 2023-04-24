import { PartialType } from '@nestjs/mapped-types';
import { CreateMenucvDto } from './create-menucv.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateMenucvDto extends PartialType(CreateMenucvDto) {

    @IsOptional()
    @IsString()
    id: number;

    @IsOptional()
    @IsString()
    libmenu : string;
}
