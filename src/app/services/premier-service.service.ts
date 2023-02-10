import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PremierServiceService {

  constructor(private logger: LoggerService) { }

  sayHello() {
    this.logger.logger('hello');
  }
}
