import { Component, Inject } from '@angular/core';
import { PREMIER_SERVICE_TOKEN } from './injectionTokens/premier-service.token';
import { PremierServiceService } from './services/premier-service.service';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private premierService: PremierServiceService,
    private router: Router,
    private ngxService: NgxUiLoaderService
  ) {
    this.premierService.sayHello();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('start loading');
        this.ngxService.start();
        /*         this.loadding = true; */
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        console.log('end loading');
        this.ngxService.stop();
        /*         this.loadding = false;
         */
      }
    });
  }
  navigateWithNavigationExtras() {
    this.router.navigate(['/extra'], {
      state: {
        userId: 30,
        name: 'aymen'
      }
    })
  }
  title = 'Starting Advanced Topics';
}
