import { InputPasswordModule } from './input-password.module';

describe('InputPasswordModule', () => {
  let inputPasswordModule: InputPasswordModule;

  beforeEach(() => {
    inputPasswordModule = new InputPasswordModule();
  });

  it('should create an instance', () => {
    expect(inputPasswordModule).toBeTruthy();
  });
});
