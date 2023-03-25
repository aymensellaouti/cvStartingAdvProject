import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class Auth2Service {
  authenticated = false;
  constructor() {}
  isAuthentified(): boolean {
    this.authenticated = !!localStorage.getItem("user");
    return this.authenticated;
  }
}
