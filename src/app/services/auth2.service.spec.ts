import { Auth2Service } from "./auth2.service";

fdescribe("AuthService", () => {
  let authService: Auth2Service;

  /* Arrange
    1- Instancier le service
  */

  beforeEach(() => {
    /* Act */
    localStorage.removeItem("user");
    authService = new Auth2Service();
  });
  it("should be authenticated when token is in localstorage", () => {
    /* Act */
    localStorage.setItem("user", "gti");
    /* Assert */
    expect(authService.isAuthentified()).toBeTrue();
  });
  it("should not be authenticated when token is not in localstorage", () => {
    expect(authService.isAuthentified()).toBeFalse();
  });
});
