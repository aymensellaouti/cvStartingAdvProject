import { Component, Inject, OnInit } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { EMPTY, Observable, catchError, of } from "rxjs";
import { CONSTANTES } from "../../../config/const.config";
import { FakeCvService } from "../services/fake-cv.service";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
  providers: [
    {
      provide: CvService,
      useClass: CONSTANTES.fakeCvService ? FakeCvService : CvService,
    },
  ],
})
export class CvComponent implements OnInit {
  cvs: Cv[];
  nbClickItem = 0;
  /*   selectedCv: Cv | null = null; */
  date = new Date();

  constructor(
    private logger: LoggerService,
    private toastr: ToastrService,
    private cvService: CvService,
    private title: Title,
    private activatedRoute: ActivatedRoute
  ) {
    console.log(this.activatedRoute);

    this.cvs = this.activatedRoute.snapshot.data["cvs"];
    console.log(
      "From Message Resolver",
      this.activatedRoute.snapshot.data["message"]
    );

    this.logger.logger("je suis le cvComponent");
    this.toastr.info("Bienvenu dans notre CvTech");
    this.cvService.selectCv$.subscribe(() => this.nbClickItem++);
  }
  ngOnInit(): void {
    this.title.setTitle("cv");
  }
}
