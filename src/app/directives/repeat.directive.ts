import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

export class RepeatContext {
  constructor(
    public index = 0,
    public nbIteration = 0,
    public isOdd: boolean = false,
    public isEven: boolean = true,
    public isFirst: boolean = true,
    public isLast: boolean = false
  ) {
    if (this.index != 0) {
      this.isFirst = false;
    }
    if (this.index == this.nbIteration - 1) {
      this.isLast = true;
    }
    this.isOdd = !(this.index % 2);
    this.isEven = !!(this.index % 2);
  }
}

@Directive({
  selector: '[appRepeat]',
})
export class RepeatDirective implements OnChanges {
  @Input() appRepeat: number = 0;
  @Input('appRepeatMaxVal') maxVal: number = 10;
  constructor(
    private template: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.vcr.clear();
    let borne = this.appRepeat <= this.maxVal ? this.appRepeat : this.maxVal;
    for (let i = 0; i < borne; i++) {
      let repeatContext = new RepeatContext(i, borne);
      this.vcr.createEmbeddedView(this.template, repeatContext);
    }
  }
}
