import { Component, Host, Optional, Self } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { TestModifiersService } from '../services/test-modifiers.service';

@Component({
  selector: 'app-resolution-modifiers',
  templateUrl: './resolution-modifiers.component.html',
  styleUrls: ['./resolution-modifiers.component.css'],
  providers: [],
  viewProviders: [],
})
export class ResolutionModifiersComponent {
  constructor(@Optional() @Host() private tms: TestModifiersService) {
    if (this.tms) {
      this.tms.test();
    } else {
      console.log('TestModifiersService inavaible');
    }
  }
}
