import { Injectable } from "@angular/core";
import { CanMatch, Route, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth/services/auth.service";

@Injectable({
  providedIn: "root",
})
export class CanMatchAuthenticatedGuard implements CanMatch {
  constructor(private authService: AuthService) {}

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isLoggedIn$;
  }
}
