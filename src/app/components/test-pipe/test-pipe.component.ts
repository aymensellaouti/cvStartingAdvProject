import { Component } from "@angular/core";

@Component({
  selector: "app-test-pipe",
  templateUrl: "./test-pipe.component.html",
  styleUrls: ["./test-pipe.component.css"],
})
export class TestPipeComponent {
  items: number[] = [];
  message = "";
  constructor() {
    for (let i = 0; i < 100; i++) {
      this.items[i] = this.getRandomValBetween(20, 30);
    }
    console.log(this.items);
  }

  calcul(x: number) {
    console.log(x);
    return this.f(x);
  }

  private getRandomValBetween(min: number, max: number): number {
    return Math.ceil(Math.random() * (max - min)) + min;
  }

  private f(x: number): number {
    if (x == 0 || x == 1) {
      return 1;
    } else {
      return 2 * this.f(x - 1) + 3 * this.f(x - 2);
    }
  }
}
