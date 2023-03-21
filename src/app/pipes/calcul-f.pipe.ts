import { Pipe, PipeTransform } from "@angular/core";

import memo from "memo-decorator";

@Pipe({
  name: "calculF",
})
export class CalculFPipe implements PipeTransform {
  @memo()
  transform(x: number): number {
    console.log(x);
    return this.f(x);
  }
  @memo()
  private f(x: number): number {
    if (x == 0 || x == 1) {
      return 1;
    } else {
      return 2 * this.f(x - 1) + 3 * this.f(x - 2);
    }
  }
}
