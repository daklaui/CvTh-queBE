import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { Sector } from './entities/sector.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SectorService {

constructor(@InjectRepository(Sector) private userRepo : Repository<Sector>){}
  
async create(createSectorDto: CreateSectorDto) {
  try {
    const newSector = await this.userRepo.create(createSectorDto);
    await this.userRepo.save(newSector);
    return newSector;
  
  } catch (error) {
    
    throw new NotFoundException('Failed saving something Sector,');
  }
  }
  
  findAll(): Promise<any> {
    return this.userRepo.find();
  }

findOne(id: number)  :Promise<CreateSectorDto>{
  return this.userRepo.findOne({where: {Id_sector : id }});
}

update(id: number, updateSectorDto: UpdateSectorDto) {
  return this.userRepo.update(id,updateSectorDto);
}

remove(id: number): Promise<any> {
  return this.userRepo.delete(id);
}

}