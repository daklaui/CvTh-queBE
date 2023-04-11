import { Test, TestingModule } from '@nestjs/testing';
import { CollaborateurController } from './collaborateur.controller';
import { CollaborateurService } from './collaborateur.service';

describe('CollaborateurController', () => {
  let controller: CollaborateurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollaborateurController],
      providers: [CollaborateurService],
    }).compile();

    controller = module.get<CollaborateurController>(CollaborateurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
