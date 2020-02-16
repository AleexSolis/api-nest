import { Test, TestingModule } from '@nestjs/testing';
import { PInformationService } from './p-information.service';

describe('PInformationService', () => {
  let service: PInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PInformationService],
    }).compile();

    service = module.get<PInformationService>(PInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
