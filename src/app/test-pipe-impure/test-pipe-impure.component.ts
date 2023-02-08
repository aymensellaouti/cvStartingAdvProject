import { Component } from '@angular/core';

@Component({
  selector: 'app-test-pipe-impure',
  templateUrl: './test-pipe-impure.component.html',
  styleUrls: ['./test-pipe-impure.component.css'],
})
export class TestPipeImpureComponent {
  message = '';
  elements: number[] = [];

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.elements[i] = this.getRandomValBetween(20, 30);
    }
  }

  private getRandomValBetween(min: number, max: number): number {
    return Math.ceil(Math.random() * min) + (max - min);
  }

  
}
