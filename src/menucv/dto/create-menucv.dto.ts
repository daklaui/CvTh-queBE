import { IsNotEmpty, IsString } from "class-validator";

export class CreateMenucvDto {

    @IsNotEmpty()
    @IsString()
    id: number;

    @IsNotEmpty()
    @IsString()
    libmenu : string;

}
