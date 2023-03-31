import { Injectable } from '@nestjs/common';
import { CreatePsychoTechicalProfileDto } from './dto/create-psycho-techincal-profile.dto';
import { UpdatePsychoTechicalProfileDto } from './dto/update-psycho-techincal-profile.dto';

@Injectable()
export class PsychoTechicalProfileService {
  create(createPsychoTechicalProfileDto: CreatePsychoTechicalProfileDto) {
    return 'This action adds a new psychoTechicalProfile';
  }

  findAll() {
    return `This action returns all psychoTechicalProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} psychoTechicalProfile`;
  }

  update(id: number, updatePsychoTechicalProfileDto: UpdatePsychoTechicalProfileDto) {
    return `This action updates a #${id} psychoTechicalProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} psychoTechicalProfile`;
  }
}
