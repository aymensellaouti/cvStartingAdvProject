import { Component } from '@angular/core';
import { AuthTestService } from './../../services/auth-test.service';

@Component({
  selector: 'app-auth2',
  templateUrl: './auth2.component.html',
  styleUrls: ['./auth2.component.css'],
})
export class Auth2Component {
  constructor(private authService: AuthTestService) {}
  isLogged = true;
  login() {
    this.isLogged = this.authService.isAuthentified();
  }
}
