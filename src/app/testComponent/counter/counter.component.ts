import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  nb = 0;
  increment() {
    this.nb++;
  }
  decrement() {
    this.nb--;
  }
}
