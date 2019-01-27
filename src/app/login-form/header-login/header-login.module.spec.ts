import { HeaderLoginModule } from './header-login.module';

describe('HeaderLoginModule', () => {
  let headerLoginModule: HeaderLoginModule;

  beforeEach(() => {
    headerLoginModule = new HeaderLoginModule();
  });

  it('should create an instance', () => {
    expect(headerLoginModule).toBeTruthy();
  });
});
