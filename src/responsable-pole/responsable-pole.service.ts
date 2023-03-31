import { Injectable } from '@nestjs/common';
import { CreateResponsablePoleDto } from './dto/create-responsable-pole.dto';
import { UpdateResponsablePoleDto } from './dto/update-responsable-pole.dto';

@Injectable()
export class ResponsablePoleService {
  create(createResponsablePoleDto: CreateResponsablePoleDto) {
    return 'This action adds a new responsablePole';
  }

  findAll() {
    return `This action returns all responsablePole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} responsablePole`;
  }

  update(id: number, updateResponsablePoleDto: UpdateResponsablePoleDto) {
    return `This action updates a #${id} responsablePole`;
  }

  remove(id: number) {
    return `This action removes a #${id} responsablePole`;
  }
}
