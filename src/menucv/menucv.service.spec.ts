import { Test, TestingModule } from '@nestjs/testing';
import { MenucvService } from './menucv.service';

describe('MenucvService', () => {
  let service: MenucvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenucvService],
    }).compile();

    service = module.get<MenucvService>(MenucvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
