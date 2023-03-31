import { Injectable } from '@nestjs/common';
import { CreateCollaborateurDto } from './dto/create-collaborateur.dto';
import { UpdateCollaborateurDto } from './dto/update-collaborateur.dto';

@Injectable()
export class CollaborateurService {
  create(createCollaborateurDto: CreateCollaborateurDto) {
    return 'This action adds a new collaborateur';
  }

  findAll() {
    return `This action returns all collaborateur`;
  }

  findOne(id: number) {
    return `This action returns a #${id} collaborateur`;
  }

  update(id: number, updateCollaborateurDto: UpdateCollaborateurDto) {
    return `This action updates a #${id} collaborateur`;
  }

  remove(id: number) {
    return `This action removes a #${id} collaborateur`;
  }
}
