import { PartialType } from '@nestjs/mapped-types';
import { CreateSpokenLanguageDto } from './create-spoken-language.dto';

export class UpdateSpokenLanguageDto extends PartialType(CreateSpokenLanguageDto) {}
