import { Test, TestingModule } from '@nestjs/testing';
import { CollaborateurService } from './collaborateur.service';

describe('CollaborateurService', () => {
  let service: CollaborateurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollaborateurService],
    }).compile();

    service = module.get<CollaborateurService>(CollaborateurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
