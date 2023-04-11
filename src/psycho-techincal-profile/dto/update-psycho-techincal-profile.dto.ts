import { PartialType } from '@nestjs/mapped-types';
import { CreatePsychoTechicalProfileDto } from './create-psycho-techincal-profile.dto';

export class UpdatePsychoTechicalProfileDto extends PartialType(CreatePsychoTechicalProfileDto) {}
