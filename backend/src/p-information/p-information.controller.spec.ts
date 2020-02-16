import { Test, TestingModule } from '@nestjs/testing';
import { PInformationController } from './p-information.controller';

describe('PInformation Controller', () => {
  let controller: PInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PInformationController],
    }).compile();

    controller = module.get<PInformationController>(PInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
