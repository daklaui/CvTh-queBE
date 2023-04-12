import { Injectable } from '@nestjs/common';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { Departement } from './entities/departement.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DepartementService {


  constructor(@InjectRepository(Departement) private userRepo : Repository<Departement>){}


  async create(createDepartementDto: CreateDepartementDto) {
    const newDepartement = await this.userRepo.create(createDepartementDto);
    await this.userRepo.save(newDepartement);
    return newDepartement;
  }

  findAll(): Promise<any> {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOne({where: {Id_departement : id }});
  }

  update(id: number, updateDepartementDto: UpdateDepartementDto) {
    return this.userRepo.update(id,updateDepartementDto);
  }

  remove(id: number): Promise<any> {
    return this.userRepo.delete(id);
  }
}
