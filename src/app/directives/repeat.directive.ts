import { Input } from "@angular/core";
import {
  Directive,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

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
      this.vcr.createEmbeddedView(this.templateRef);
    }
  }
}
