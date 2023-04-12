import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  fromCvAction,
  fromCvDetailsAction,
  fromCvDeleteAction,
} from "./cv.action";
import { map, switchMap, of, catchError, EMPTY } from "rxjs";
import { CvService } from "../services/cv.service";
@Injectable({ providedIn: "root" })
export class CvEffect {
  loadCvEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCvAction.loadCvs),
      switchMap((action) => this.cvService.getCvs()),
      map((cvs) => fromCvAction.cvsLoadedSuccess({ cvs })),
      catchError((error: Error) => of(fromCvAction.cvsLoadedFail({ error })))
    )
  );
  detailCvEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCvDetailsAction.loadCv),
      switchMap(({ id }) => this.cvService.getCvById(id)),
      map((cv) => fromCvDetailsAction.cvLoadedSuccess({ cv })),
      catchError((error: Error) =>
        of(fromCvDetailsAction.cvLoadedFail({ error }))
      )
    )
  );
  deleteCvEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCvDeleteAction.deleteCv),
      switchMap((action) => this.cvService.getCvs()),
      map((cvs) => fromCvAction.cvsLoadedSuccess({ cvs })),
      catchError((error: Error) => of(fromCvAction.cvsLoadedFail({ error })))
    )
  );

  constructor(private actions$: Actions, private cvService: CvService) {}
}
