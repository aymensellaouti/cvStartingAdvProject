import { Component } from "@angular/core";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-master-details",
  templateUrl: "./master-details.component.html",
  styleUrls: ["./master-details.component.css"],
})
export class MasterDetailsComponent {
  cvs: Cv[] = [];
  constructor(
    private cvService: CvService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.cvService.getCvs().subscribe((cvs) => (this.cvs = cvs));
    this.cvService.selectCv$.subscribe((cv) =>
      this.router.navigate([cv.id], { relativeTo: this.activatedRoute })
    );
  }
}
