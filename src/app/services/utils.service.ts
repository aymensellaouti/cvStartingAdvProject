import { MathService } from "./math.service";
import { Injectable } from "@angular/core";

@Injectable()
export class UtilsService {
  constructor(private mathService: MathService) {}
  somme(x: number, y: number): number {
    return this.mathService.additioner(x, y);
  }
}
