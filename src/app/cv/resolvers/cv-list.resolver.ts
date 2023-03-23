import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of, catchError, EMPTY, throwError } from "rxjs";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class CvListResolver implements Resolve<Cv[]> {
  constructor(private cvService: CvService, private toastr: ToastrService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Cv[]> {
    return this.cvService.getCvs().pipe(
      catchError((e) => {
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
        /*         return throwError((e) => new Error(e)) */
        return of(this.cvService.getFakeCvs());
      })
    );
  }
}
