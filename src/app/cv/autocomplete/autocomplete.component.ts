import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { debounceTime, fromEvent, map, switchMap, tap, Observable } from "rxjs";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv";
import { Router } from "@angular/router";

@Component({
  selector: "app-autocomplete",
  templateUrl: "./autocomplete.component.html",
  styleUrls: ["./autocomplete.component.css"],
})
export class AutocompleteComponent implements OnInit {
  search = "";
  cvs$!: Observable<Cv[]>;
  @ViewChild("autocomplete", { static: true }) searchInput!: ElementRef;
  constructor(private cvService: CvService, private router: Router) {}
  ngOnInit(): void {
    this.cvService.selectCv$.subscribe((cv) =>
      this.router.navigate(["cv", cv.id])
    );
    /* Esma3 3al input et a chaque click triggeri event */
    this.cvs$ = fromEvent(this.searchInput.nativeElement, "keyup").pipe(
      /* Khali lel user 300ms bech inajem iekteb */
      debounceTime(300),
      /* ki teb3eth l'info logiha */
      tap(() => {
        console.log(this.search);
      }),
      /* recupéri la liste des cvs eli 3andhom esm fih el search string */
      switchMap(() => this.cvService.getCvsByName(this.search))
    );
  }
}
