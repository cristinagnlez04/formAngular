import { ButtonLoginModule } from './button-login.module';

describe('ButtonLoginModule', () => {
  let buttonLoginModule: ButtonLoginModule;

  beforeEach(() => {
    buttonLoginModule = new ButtonLoginModule();
  });

  it('should create an instance', () => {
    expect(buttonLoginModule).toBeTruthy();
  });
});
