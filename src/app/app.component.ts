import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  Inject,
} from '@angular/core';
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
import { ProductService } from './products/services/product.service';
import { User } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = new User(1, 'test');
  constructor(
    private premierService: PremierServiceService,
    private router: Router,
    private ngxService: NgxUiLoaderService,
    private productService: ProductService,
    public cdr: ChangeDetectorRef,
    public appRef: ApplicationRef
  ) {
    this.premierService.sayHello();
    /*     setInterval(() => {
      console.log(this.user);

      this.user.email += 'a';
    }, 2500); */
        this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('start loading');
        this.ngxService.start();
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        console.log('end loading');
        this.ngxService.stop();
      }
    });
    /*     this.productService
      .getProducts()
      .subscribe((products: ProductModel[]) => console.table(products)); */
  }
  navigateWithNavigationExtras() {
    /* this.cdr. */
    this.router.navigate(['/extra'], {
      state: {
        userId: 30,
        name: 'aymen',
      },
    });
  }
  title = 'Starting Advanced Topics';

  getRandom(): void {
    console.log(Math.ceil(Math.random() * 3) + 1);
  }
}
