import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {
  @Input() appRepeat: number = 0;
  constructor() {
    console.log('appReapeat:', this.appRepeat);
  }

}
