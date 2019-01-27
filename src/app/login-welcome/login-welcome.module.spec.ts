import { LoginWelcomeModule } from './login-welcome.module';

describe('LoginWelcomeModule', () => {
  let loginWelcomeModule: LoginWelcomeModule;

  beforeEach(() => {
    loginWelcomeModule = new LoginWelcomeModule();
  });

  it('should create an instance', () => {
    expect(loginWelcomeModule).toBeTruthy();
  });
});
