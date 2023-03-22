import { Component, Input } from "@angular/core";
import { Observable, map, tap, timer } from "rxjs";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"],
})
export class SliderComponent {
  @Input() images = ["404.png", "as.jpg", "cv.png"];
  @Input() timer = 1000;
  @Input() size = 150;
  images$!: Observable<string>;
  ngOnInit() {
    this.images$ = timer(0, this.timer).pipe(
      map((i) => this.images[i % this.images.length]),
      tap((i) => console.log(i))
    );
  }
}
