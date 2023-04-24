import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenucvService } from './menucv.service';
import { CreateMenucvDto } from './dto/create-menucv.dto';
import { UpdateMenucvDto } from './dto/update-menucv.dto';

@Controller('menucv')
export class MenucvController {
  constructor(private readonly menucvService: MenucvService) {}

  @Post()
  create(@Body() createMenucvDto: CreateMenucvDto) {
    return this.menucvService.create(createMenucvDto);
  }

  @Get()
  findAll() {
    return this.menucvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menucvService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenucvDto: UpdateMenucvDto) {
    return this.menucvService.update(+id, updateMenucvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menucvService.remove(+id);
  }
}
