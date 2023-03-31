import { Test, TestingModule } from '@nestjs/testing';
import { SpokenLanguageController } from './spoken-language.controller';
import { SpokenLanguageService } from './spoken-language.service';

describe('SpokenLanguageController', () => {
  let controller: SpokenLanguageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpokenLanguageController],
      providers: [SpokenLanguageService],
    }).compile();

    controller = module.get<SpokenLanguageController>(SpokenLanguageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
