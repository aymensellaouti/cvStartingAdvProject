import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective implements OnChanges {
  constructor(
    private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {}
  @Input() appUnless = true;
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    if (!this.appUnless) this.vcr.createEmbeddedView(this.templateRef);
    else this.vcr.clear();
  }
}
