import { AuthTestService } from './auth-test.service';

fdescribe('AuthTestService', () => {
  let authTestService: AuthTestService;

  beforeEach(() => {
    authTestService = new AuthTestService();
    localStorage.clear();
  });
  it('should be truthy', () => {
    expect(authTestService).toBeTruthy();
  });
  it('should be authenticated when user token is in local storage', () => {
    localStorage.setItem('user', 'user');
    authTestService.isAuthentified();
    expect(authTestService.authenticated).toBeTrue;
  });
  it('should not be authenticated when user token is not in local storage', () => {
    authTestService.isAuthentified();
    expect(authTestService.authenticated).toBeFalse;
  });
});
