import { Injectable } from '@nestjs/common';
import { CreateSpokenLanguageDto } from './dto/create-spoken-language.dto';
import { UpdateSpokenLanguageDto } from './dto/update-spoken-language.dto';

@Injectable()
export class SpokenLanguageService {
  create(createSpokenLanguageDto: CreateSpokenLanguageDto) {
    return 'This action adds a new spokenLanguage';
  }

  findAll() {
    return `This action returns all spokenLanguage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spokenLanguage`;
  }

  update(id: number, updateSpokenLanguageDto: UpdateSpokenLanguageDto) {
    return `This action updates a #${id} spokenLanguage`;
  }

  remove(id: number) {
    return `This action removes a #${id} spokenLanguage`;
  }
}
