import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import {
  Observable,
  fromEvent,
  map,
  take,
  tap,
  throttleTime,
  timer,
} from "rxjs";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"],
})
export class SliderComponent {
  @Input() images = ["404.png", "as.jpg", "cv.png"];
  @Input() timer = 1000;
  @Input() size = 150;
  @ViewChild("div") div!: ElementRef;
  images$!: Observable<string>;
  ngOnInit() {
    this.images$ = timer(0, this.timer).pipe(
      map((i) => this.images[i % this.images.length]),
      tap(/* (i) => console.log(i) */) /* ,
      throttleTime(1000) */
      /* take(5) */
    );
  }
  ngAfterViewInit() {
    fromEvent(this.div.nativeElement, "mousemove")
      .pipe(throttleTime(500))
      .subscribe((data) => {
        console.log(data);
        console.log("hover");
      });
  }
}
