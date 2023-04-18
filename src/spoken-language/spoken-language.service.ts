import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpokenLanguageDto } from './dto/create-spoken-language.dto';
import { UpdateSpokenLanguageDto } from './dto/update-spoken-language.dto';
import { SpokenLanguage } from './entities/spoken-language.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SpokenLanguageService {

  constructor(@InjectRepository(SpokenLanguage) private userRepo : Repository<SpokenLanguage>){}

  async create(createSpokenLanguageDto: CreateSpokenLanguageDto) {
   
  try {
    const newSpokenLanguage = await this.userRepo.create(createSpokenLanguageDto);
    await this.userRepo.save(newSpokenLanguage);
    return newSpokenLanguage;
  
  } catch (error) {
    
    throw new NotFoundException('Failed saving something,');
  }
  }
  
  
  findAll(): Promise<any> {
    return this.userRepo.find();
  }

  findOne(id: number) :Promise<CreateSpokenLanguageDto>{
    return this.userRepo.findOne({where: {Id_language : id }});
  }

  update(id: number, updateSpokenLanguageDto: UpdateSpokenLanguageDto) {
    return this.userRepo.update(id,updateSpokenLanguageDto);
  }

  remove(id: number) : Promise<any> {
    return this.userRepo.delete(id);
  }
}








