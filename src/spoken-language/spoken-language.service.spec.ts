import { Test, TestingModule } from '@nestjs/testing';
import { SpokenLanguageService } from './spoken-language.service';

describe('SpokenLanguageService', () => {
  let service: SpokenLanguageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpokenLanguageService],
    }).compile();

    service = module.get<SpokenLanguageService>(SpokenLanguageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
