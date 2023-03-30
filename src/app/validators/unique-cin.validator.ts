import { Observable, map, tap } from "rxjs";
import { CvService } from "../cv/services/cv.service";
import { Inject, Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";
@Injectable({ providedIn: "root" })
export class CvAsyncValidators {
  constructor(private cvService: CvService) {}
  uniqueCinValidator = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    return this.cvService.selectByProperty("cin", control.value).pipe(
      tap((cv) => console.log("In validator cv : ", cv)),
      map((cvs) => (cvs.length ? { cinExist: true } : null)),
      tap((cv) => console.log("In validator cv : ", cv))
    );
  };
}
