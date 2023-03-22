import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of, catchError } from "rxjs";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class MessageResolver implements Resolve<string> {
  constructor() {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string> | string {
    return "from Message Resolver";
  }
}
