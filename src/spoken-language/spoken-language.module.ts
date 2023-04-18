import { Module } from '@nestjs/common';
import { SpokenLanguageService } from './spoken-language.service';
import { SpokenLanguageController } from './spoken-language.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpokenLanguage } from './entities/spoken-language.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SpokenLanguage])],
  controllers: [SpokenLanguageController],
  providers: [SpokenLanguageService],
  exports: [SpokenLanguageService],
})
export class SpokenLanguageModule {}
