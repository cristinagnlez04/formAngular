import { LoginIndexModule } from './login-index.module';

describe('LoginIndexModule', () => {
  let loginIndexModule: LoginIndexModule;

  beforeEach(() => {
    loginIndexModule = new LoginIndexModule();
  });

  it('should create an instance', () => {
    expect(loginIndexModule).toBeTruthy();
  });
});
