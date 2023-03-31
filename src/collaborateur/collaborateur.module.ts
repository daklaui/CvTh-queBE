import { Module } from '@nestjs/common';
import { CollaborateurService } from './collaborateur.service';
import { CollaborateurController } from './collaborateur.controller';

@Module({
  controllers: [CollaborateurController],
  providers: [CollaborateurService]
})
export class CollaborateurModule {}
