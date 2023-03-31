import { PartialType } from '@nestjs/mapped-types';
import { CreateResponsablePoleDto } from './create-responsable-pole.dto';

export class UpdateResponsablePoleDto extends PartialType(CreateResponsablePoleDto) {}
