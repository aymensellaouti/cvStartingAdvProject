import { Directive, Host, Optional } from '@angular/core';
import { TestModifiersService } from '../services/test-modifiers.service';
import { LoggerService } from '../services/logger.service';

@Directive({
  selector: '[appTestHost]',
})
export class TestHostDirective {
  constructor(
    @Optional() @Host() private tms: TestModifiersService,
    private logger: LoggerService
  ) {
    if (this.tms) {
      console.log('From directive appTestHost : ');
      this.tms.test();
    } else {
      console.log('From directive appTestHost : Null');
    }
    this.logger.logger('From directive appTestHost');
  }
}
