import { Test, TestingModule } from '@nestjs/testing';
import { ResponsablePoleService } from './responsable-pole.service';

describe('ResponsablePoleService', () => {
  let service: ResponsablePoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponsablePoleService],
    }).compile();

    service = module.get<ResponsablePoleService>(ResponsablePoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
