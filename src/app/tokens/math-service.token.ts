import { InjectionToken } from "@angular/core";
import { MathService } from "../services/math.service";
export const mathServiceToken = new InjectionToken<MathService>(
  "MATH_SERVICE_TOKEN"
);
