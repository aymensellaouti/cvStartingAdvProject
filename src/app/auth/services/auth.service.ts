import { Injectable } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../config/api.config';
import { Observable, Subject, map, tap, BehaviorSubject } from 'rxjs';

export class User {
  constructor(public id: number, public email: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userSubject = new BehaviorSubject<User | null>(null);
  auth$ = this.userSubject.asObservable();
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.auth$.pipe(
      map((user) => this.isAuthenticated() && !!user)
    );
    this.isLoggedOut$ = this.auth$.pipe(map((user) => !user));
    const user = localStorage.getItem('user');
    if (user) {
      this.userSubject.next(JSON.parse(user));
    }
  }
  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials).pipe(
      tap((loginResponseDto) => {
        const user = new User(loginResponseDto.userId, credentials.email);
        localStorage.setItem('token', loginResponseDto.id);
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
      })
    );
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  logout() {
    this.userSubject.next(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
