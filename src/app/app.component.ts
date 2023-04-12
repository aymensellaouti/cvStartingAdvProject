import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  Inject,
} from "@angular/core";
import { PREMIER_SERVICE_TOKEN } from "./injectionTokens/premier-service.token";
import { PremierServiceService } from "./services/premier-service.service";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { User } from "./auth/services/auth.service";
import { Store } from "@ngrx/store";
import { initStoreAction } from "./state";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  user = new User(1, "test");
  constructor(
    private router: Router,
    private ngxService: NgxUiLoaderService,
    public cdr: ChangeDetectorRef,
    public appRef: ApplicationRef,
    private store: Store
  ) {
    store.dispatch(initStoreAction());
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log("start loading");
        this.ngxService.start();
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        console.log("end loading");
        this.ngxService.stop();
      }
    });
  }
  navigateWithNavigationExtras() {
    this.router.navigate(["/extra"], {
      state: {
        userId: 30,
        name: "aymen",
      },
    });
  }
  title = "Starting Advanced Topics";

  getRandom(): void {
    console.log(Math.ceil(Math.random() * 3) + 1);
  }
}
