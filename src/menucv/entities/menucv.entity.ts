import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Menucv {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length :50,
        unique:true
    })
    libmenu : string;

}
