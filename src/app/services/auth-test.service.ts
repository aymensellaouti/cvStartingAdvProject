import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthTestService {
  authenticated = false;
  constructor() {}
  isAuthentified(): boolean {
    this.authenticated = !!localStorage.getItem('user');
    return this.authenticated;
  }
}
