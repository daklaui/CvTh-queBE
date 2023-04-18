import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {

  constructor(@InjectRepository(Skill) private userRepo : Repository<Skill>){}
  
  async create(createSkillDto: CreateSkillDto) {
    try {
      const newSkill = await this.userRepo.create(createSkillDto);
      await this.userRepo.save(newSkill);
      return newSkill;
    
    } catch (error) {
      
      throw new NotFoundException('Failed saving something Skill,');
    }
    }
    
  


    findAll(): Promise<any> {
      return this.userRepo.find();
    }

  findOne(id: number)  :Promise<CreateSkillDto>{
    return this.userRepo.findOne({where: {Id_skill : id }});
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return this.userRepo.update(id,updateSkillDto);
  }

  remove(id: number): Promise<any> {
    return this.userRepo.delete(id);
  }
}



