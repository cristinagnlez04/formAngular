import { InputEmailModule } from './input-email.module';

describe('InputEmailModule', () => {
  let inputEmailModule: InputEmailModule;

  beforeEach(() => {
    inputEmailModule = new InputEmailModule();
  });

  it('should create an instance', () => {
    expect(inputEmailModule).toBeTruthy();
  });
});
