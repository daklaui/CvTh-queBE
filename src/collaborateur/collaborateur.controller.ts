import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CollaborateurService } from './collaborateur.service';
import { CreateCollaborateurDto } from './dto/create-collaborateur.dto';
import { UpdateCollaborateurDto } from './dto/update-collaborateur.dto';

@Controller('collaborateur')
export class CollaborateurController {
  constructor(private readonly collaborateurService: CollaborateurService) {}

  @Post()
  create(@Body() createCollaborateurDto: CreateCollaborateurDto) {
    return this.collaborateurService.create(createCollaborateurDto);
  }

  @Get()
  findAll() {
    return this.collaborateurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collaborateurService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCollaborateurDto: UpdateCollaborateurDto) {
    return this.collaborateurService.update(+id, updateCollaborateurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collaborateurService.remove(+id);
  }
}
