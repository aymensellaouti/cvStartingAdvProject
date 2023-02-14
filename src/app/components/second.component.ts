import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <div class="alert alert-warning" (click)="sayCc()">{{ messageCd }}</div>
    <button (click)="cdr.detectChanges()" class="btn btn-danger">DC</button>
    <button (click)="cdr.markForCheck()" class="btn btn-warning">MFC</button>
  `,
  styles: [],
})
export class SecondComponent {
  constructor(public cdr: ChangeDetectorRef) {
    this.cdr.detach();
    setTimeout(() => {
      this.message += ' new value';
    }, 1000);
  }
  message = 'In Second';
  get messageCd() {
    console.log('CD in Second');
    return this.message;
  }
  sayCc() {
    console.log('cc');
  }
}
