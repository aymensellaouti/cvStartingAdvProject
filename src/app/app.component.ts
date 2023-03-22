import { Component, Inject } from "@angular/core";
import { UtilsService } from "./services/utils.service";
import { UtilsServiceToken } from "./tokens/utils-service.token";
import { LOGGER_INJECTION_TOKEN } from "./tokens/logger.token";
import { LoggerService } from "./services/logger.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(
    private utilsService: UtilsService,
    @Inject(LOGGER_INJECTION_TOKEN) private loggers: LoggerService[],
    private ngxService: NgxUiLoaderService,
    private router: Router
  ) {
    this.loggers.forEach((logger) => logger.logger("cc"));
    /* this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) this.ngxService.start();
      else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.ngxService.stop();
      }
    }); */
  }
  show = false;
  nb = 0;
  title = "Starting Advanced Topics";
}
