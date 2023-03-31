import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PsychoTechicalProfileService } from './psycho-techical-profile.service';
import { CreatePsychoTechicalProfileDto } from './dto/create-psycho-techincal-profile.dto';
import { UpdatePsychoTechicalProfileDto } from './dto/update-psycho-techincal-profile.dto';

@Controller('psycho-techical-profile')
export class PsychoTechicalProfileController {
  constructor(private readonly psychoTechicalProfileService: PsychoTechicalProfileService) {}

  @Post()
  create(@Body() createPsychoTechicalProfileDto: CreatePsychoTechicalProfileDto) {
    return this.psychoTechicalProfileService.create(createPsychoTechicalProfileDto);
  }

  @Get()
  findAll() {
    return this.psychoTechicalProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.psychoTechicalProfileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePsychoTechicalProfileDto: UpdatePsychoTechicalProfileDto) {
    return this.psychoTechicalProfileService.update(+id, updatePsychoTechicalProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.psychoTechicalProfileService.remove(+id);
  }
}
