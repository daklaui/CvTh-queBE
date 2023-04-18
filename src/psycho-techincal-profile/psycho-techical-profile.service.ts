import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePsychoTechicalProfileDto } from './dto/create-psycho-techincal-profile.dto';
import { UpdatePsychoTechicalProfileDto } from './dto/update-psycho-techincal-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PsychoTechincalProfile } from './entities/psycho-techincal-profile.entity';

@Injectable()
export class PsychoTechicalProfileService {
 
constructor(@InjectRepository(PsychoTechincalProfile) private userRepo : Repository<PsychoTechincalProfile>){}
  
async create(createPsychoTechicalProfileDto: CreatePsychoTechicalProfileDto) {
  try {
    const newPsychoTechicalProfile = await this.userRepo.create(createPsychoTechicalProfileDto);
    await this.userRepo.save(newPsychoTechicalProfile);
    return newPsychoTechicalProfile;
  
  } catch (error) {
    
    throw new NotFoundException('Failed saving something PsychoTechicalProfile ,');
  }
  }
  
  findAll(): Promise<any> {
    return this.userRepo.find();
  }

findOne(id: number)  :Promise<CreatePsychoTechicalProfileDto>{
  return this.userRepo.findOne({where: {Id_psychotechnicalprofile : id }});
}

update(id: number, updatePsychoTechicalProfileDto: UpdatePsychoTechicalProfileDto) {
  return this.userRepo.update(id,updatePsychoTechicalProfileDto);
}

remove(id: number): Promise<any> {
  return this.userRepo.delete(id);
}

}