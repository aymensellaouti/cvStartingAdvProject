import { LoggerService } from "./logger.service";
export class MathService {
  constructor(private logger: LoggerService) {}
  /**
   * Permet de sommer deux entier
   * @param x
   * @param y
   */
  additioner(x: number, y: number): number {
    this.logger.logger(`${x} + ${y} = ${x + y}`);
    return x + y;
  }

  /**
   * Permet de soustraire deux entier
   * @param x
   * @param y
   */
  soustraire(x: number, y: number): number {
    this.logger.logger(`${x} - ${y} = ${x - y}`);
    return x - y;
  }
}
