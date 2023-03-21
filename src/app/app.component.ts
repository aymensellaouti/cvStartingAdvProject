import { Component, Inject } from "@angular/core";
import { UtilsService } from "./services/utils.service";
import { UtilsServiceToken } from "./tokens/utils-service.token";
import { LOGGER_INJECTION_TOKEN } from "./tokens/logger.token";
import { LoggerService } from "./services/logger.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(
    private utilsService: UtilsService,
    @Inject(LOGGER_INJECTION_TOKEN) private loggers: LoggerService[]
  ) {
    this.loggers.forEach((logger) => logger.logger("cc"));

    console.log(this.utilsService.somme(3, 4));
  }
  show = false;
  nb = 0;
  title = "Starting Advanced Topics";
}
