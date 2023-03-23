import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of, catchError, EMPTY } from "rxjs";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "../../../config/routes.config";

@Injectable({
  providedIn: "root",
})
export class CvDetailResolver implements Resolve<Cv> {
  constructor(private cvService: CvService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Cv> {
    return this.cvService.getCvById(route.params["id"]).pipe(
      catchError(() => {
        this.router.navigate([APP_ROUTES.cv]);
        return EMPTY;
      })
    );
  }
}
