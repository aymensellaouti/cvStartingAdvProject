import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-extras-example',
  templateUrl: './navigation-extras-example.component.html',
  styleUrls: ['./navigation-extras-example.component.css'],
})
export class NavigationExtrasExampleComponent {
  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      console.log(state);
    } else {
      console.log('No state available');
    }
  }
}
