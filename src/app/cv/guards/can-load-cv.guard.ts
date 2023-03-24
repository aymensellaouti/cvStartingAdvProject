import { Injectable } from "@angular/core";
import {
  CanLoad,
  Route,
  UrlSegment,
  UrlTree,
  Router,
  ROUTES,
} from "@angular/router";
import { Observable, map } from "rxjs";
import { AuthService } from "../../auth/services/auth.service";
import { APP_ROUTES } from "../../../config/routes.config";

@Injectable({
  providedIn: "root",
})
export class CanLoadCvGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      segments.length == 1 ||
      segments.find((segment) => segment.path == "list")
    )
      return true;
    else {
      return this.authService.isLoggedIn$.pipe(
        map((isAuthenticated) => {
          if (isAuthenticated) {
            return true;
          } else {
            this.router.navigate([APP_ROUTES.login]);
            return false;
          }
        })
      );
    }
  }
}
