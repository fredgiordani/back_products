import { Test, TestingModule } from '@nestjs/testing';
import { \[products\]Controller } from './\[products\].controller';

describe('\[products\]Controller', () => {
  let controller: \[products\]Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [\[products\]Controller],
    }).compile();

    controller = module.get<\[products\]Controller>(\[products\]Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
