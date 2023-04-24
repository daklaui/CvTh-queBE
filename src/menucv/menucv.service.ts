import { Injectable } from '@nestjs/common';
import { CreateMenucvDto } from './dto/create-menucv.dto';
import { UpdateMenucvDto } from './dto/update-menucv.dto';

@Injectable()
export class MenucvService {
  create(createMenucvDto: CreateMenucvDto) {
    return 'This action adds a new menucv';
  }

  findAll() {
    return `This action returns all menucv`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menucv`;
  }

  update(id: number, updateMenucvDto: UpdateMenucvDto) {
    return `This action updates a #${id} menucv`;
  }

  remove(id: number) {
    return `This action removes a #${id} menucv`;
  }
}
