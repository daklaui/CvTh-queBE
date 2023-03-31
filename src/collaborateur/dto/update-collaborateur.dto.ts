import { PartialType } from '@nestjs/mapped-types';
import { CreateCollaborateurDto } from './create-collaborateur.dto';

export class UpdateCollaborateurDto extends PartialType(CreateCollaborateurDto) {}
