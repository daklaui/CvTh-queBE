import { Module } from '@nestjs/common';
import { SpokenLanguageService } from './spoken-language.service';
import { SpokenLanguageController } from './spoken-language.controller';

@Module({
  controllers: [SpokenLanguageController],
  providers: [SpokenLanguageService]
})
export class SpokenLanguageModule {}
