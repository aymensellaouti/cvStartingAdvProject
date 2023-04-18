import { Component, OnInit } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { APP_ROUTES } from "../../../config/routes.config";
import { AuthService } from "../../auth/services/auth.service";
import { Store, select } from "@ngrx/store";
import { CvState } from "../state/cv.reducers";
import { fromCvDeleteAction, fromCvDetailsAction } from "../state/cv.action";
import { selectCvDetails } from "../state/cv.selector";
import { Observable, tap } from "rxjs";

@Component({
  selector: "app-details-cv",
  templateUrl: "./details-cv.component.html",
  styleUrls: ["./details-cv.component.css"],
})
export class DetailsCvComponent implements OnInit {
  cv: Cv | null = null;
  cv$: Observable<Cv | undefined>;
  constructor(
    private cvService: CvService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    public authService: AuthService,
    private store: Store<CvState>
  ) {
    this.store.dispatch(
      fromCvDetailsAction.loadCv({
        id: this.activatedRoute.snapshot.params["id"],
      })
    );
    this.cv$ = this.store.select(selectCvDetails).pipe(
      tap((cv) => {
        if (!cv) {
          this.router.navigate([APP_ROUTES.cv]);
        }
      })
    );
  }

  ngOnInit() {
    /* this.activatedRoute.data.subscribe(({ cv }) => {
      this.cv = cv;
    });
    console.log('data snapshot', this.activatedRoute.snapshot.data); */
    /*     this.activatedRoute.params.subscribe((params) => {
      this.cvService.getCvById(params['id']).subscribe({
        next: (cv) => {
          this.cv = cv;
        },
        error: (e) => {
          this.router.navigate([APP_ROUTES.cv]);
        },
      });
    });
 */
  }
  deleteCv(cv: Cv) {
    if (cv) this.store.dispatch(fromCvDeleteAction.deleteCv({ id: cv.id }));
  }
}
