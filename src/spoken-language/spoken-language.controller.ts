import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpokenLanguageService } from './spoken-language.service';
import { CreateSpokenLanguageDto } from './dto/create-spoken-language.dto';
import { UpdateSpokenLanguageDto } from './dto/update-spoken-language.dto';

@Controller('spoken-language')
export class SpokenLanguageController {
  constructor(private readonly spokenLanguageService: SpokenLanguageService) {}

  @Post()
  create(@Body() createSpokenLanguageDto: CreateSpokenLanguageDto) {
    return this.spokenLanguageService.create(createSpokenLanguageDto);
  }

  @Get()
  findAll() {
    return this.spokenLanguageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spokenLanguageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpokenLanguageDto: UpdateSpokenLanguageDto) {
    return this.spokenLanguageService.update(+id, updateSpokenLanguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spokenLanguageService.remove(+id);
  }
}
