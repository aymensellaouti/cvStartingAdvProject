import { Component, Inject } from "@angular/core";
import { UtilsService } from "./services/utils.service";
import { UtilsServiceToken } from "./tokens/utils-service.token";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(@Inject(UtilsServiceToken) private utilsService: UtilsService) {
    console.log(this.utilsService.somme(3, 4));
  }
  show = false;
  nb = 0;
  title = "Starting Advanced Topics";
}
