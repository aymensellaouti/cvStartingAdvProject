import { Input } from "@angular/core";
import {
  Directive,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

export class RepeatContext {
  constructor(
    public id = 0,
    public nbIteration = 0,
    public isFirst = false,
    public isLast = false,
    public isOdd = false,
    public isEven = false
  ) {
    if (!this.id) this.isFirst = true;
    if (this.id == this.nbIteration - 1) this.isLast = true;
    this.isEven = !(this.id % 2);
    this.isOdd = !!(this.id % 2);
    console.log(this);
  }
}

@Directive({
  selector: "[appRepeat]",
})
export class RepeatDirective implements OnChanges {
  @Input("appRepeat") nbIteration = 0;
  constructor(
    private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.vcr.clear();
    for (let i = 0; i < this.nbIteration; i++) {
      let context = new RepeatContext(i, this.nbIteration);
      this.vcr.createEmbeddedView(this.templateRef, context);
    }
  }
}
