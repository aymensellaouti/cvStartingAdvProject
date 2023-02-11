import { Component, Input } from '@angular/core';
import {
  timer,
  tap,
  Observable,
  map,
  take,
  debounceTime,
  throttleTime,
} from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @Input() size = 150;
  @Input() timer = 1000;
  @Input() paths: string[] = [
    '404.png',
    'as.jpg',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  images$!: Observable<string>;
  constructor() {
    this.images$ = timer(0, this.timer).pipe(
      tap((data) => console.log(data)),
      throttleTime(1500),
      tap((data) => console.log(data)),
      map((i) => this.paths[i % this.paths.length]),
      take(3)
    );
  }
}
