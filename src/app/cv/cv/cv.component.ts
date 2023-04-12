import { Component } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import {
  filter,
  Observable,
  catchError,
  of,
  tap,
  map,
  shareReplay,
} from "rxjs";
import { Store, select } from "@ngrx/store";
import { fromCvAction } from "../state/cv.action";
import { AppState } from "src/app/state";
import { selectAllCvs, selectLoadingError } from "../state/cv.selector";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  error$: Observable<string | null>;
  cvs$: Observable<Cv[]>;
  junios$: Observable<Cv[]>;
  seniors$: Observable<Cv[]>;
  nbClickItem = 0;
  /*   selectedCv: Cv | null = null; */
  date = new Date();

  constructor(
    private logger: LoggerService,
    private toastr: ToastrService,
    private cvService: CvService,
    private store: Store<AppState>
  ) {
    store.dispatch(fromCvAction.loadCvs());
    this.error$ = this.store.pipe(select(selectLoadingError)).pipe(
      filter((error) => !!error),
      tap((error) => {
        this.toastr.error(error ?? "");
      })
    );
    this.cvs$ = this.store.pipe(
      select(selectAllCvs),
      catchError((e) => {
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.
        `);
        return of(this.cvService.getFakeCvs());
      }),
      shareReplay()
    );
    this.junios$ = this.cvs$.pipe(
      map((cvs) => cvs.filter((cv) => cv.age < 40))
    );
    this.seniors$ = this.cvs$.pipe(
      map((cvs) => cvs.filter((cv) => cv.age >= 40))
    );
    /* this.cvService.getCvs().subscribe(
      {
        next: (cvs) => {this.cvs = cvs;},
        error: () => {
          this.cvs = this.cvService.getFakeCvs();
          this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`)
        }
      }
    ); */
    this.logger.logger("je suis le cvComponent");
    this.toastr.info("Bienvenu dans notre CvTech");
    this.cvService.selectCv$.subscribe(() => this.nbClickItem++);
  }
}
