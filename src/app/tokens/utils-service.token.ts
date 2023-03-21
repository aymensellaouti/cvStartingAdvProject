import { InjectionToken } from "@angular/core";
import { UtilsService } from "../services/utils.service";

export const UtilsServiceToken = new InjectionToken<UtilsService>(
  "UTILS_SERVICE_TOKEN"
);
