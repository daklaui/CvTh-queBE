import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponsablePoleService } from './responsable-pole.service';
import { CreateResponsablePoleDto } from './dto/create-responsable-pole.dto';
import { UpdateResponsablePoleDto } from './dto/update-responsable-pole.dto';

@Controller('responsable-pole')
export class ResponsablePoleController {
  constructor(private readonly responsablePoleService: ResponsablePoleService) {}

  @Post()
  create(@Body() createResponsablePoleDto: CreateResponsablePoleDto) {
    return this.responsablePoleService.create(createResponsablePoleDto);
  }

  @Get()
  findAll() {
    return this.responsablePoleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responsablePoleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResponsablePoleDto: UpdateResponsablePoleDto) {
    return this.responsablePoleService.update(+id, updateResponsablePoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responsablePoleService.remove(+id);
  }
}
