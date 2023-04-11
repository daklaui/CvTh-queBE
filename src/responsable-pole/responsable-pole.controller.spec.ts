import { Test, TestingModule } from '@nestjs/testing';
import { ResponsablePoleController } from './responsable-pole.controller';
import { ResponsablePoleService } from './responsable-pole.service';

describe('ResponsablePoleController', () => {
  let controller: ResponsablePoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResponsablePoleController],
      providers: [ResponsablePoleService],
    }).compile();

    controller = module.get<ResponsablePoleController>(ResponsablePoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
