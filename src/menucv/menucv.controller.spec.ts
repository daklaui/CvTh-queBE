import { Test, TestingModule } from '@nestjs/testing';
import { MenucvController } from './menucv.controller';
import { MenucvService } from './menucv.service';

describe('MenucvController', () => {
  let controller: MenucvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenucvController],
      providers: [MenucvService],
    }).compile();

    controller = module.get<MenucvController>(MenucvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
