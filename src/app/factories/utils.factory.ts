import { MathService } from "../services/math.service";
import { UtilsService } from "../services/utils.service";
/**
 * Ceci est un utilsServiceFactory
 * Il permet de créer un service UtilsService
 * @param mathService: MathService
 */
export function utilsServiceFactory(mathService: MathService) {
  /* Créer et retourne l'utils service */
  return new UtilsService(mathService);
}
