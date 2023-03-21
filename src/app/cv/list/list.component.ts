import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Cv } from "../model/cv";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  @Input() cvs: Cv[] | null = [];
  trackByFn(iteration: number, cv: Cv) {
    console.log(cv);
    console.log(iteration);

    return cv.id;
  }
  /*   @Output() forwardCv = new EventEmitter<Cv>(); */
}
