import { User } from '../auth/services/auth.service';
import { Input } from '@angular/core';
import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <div class="alert alert-warning" (click)="sayCc()">{{ messageCd }}</div>
    <input type="text" [(ngModel)]="message" />
    <button (click)="cdr.detectChanges()" class="btn btn-danger">DC</button>
    <button (click)="mfc()" class="btn btn-warning">MFC</button>
    <button (click)="cdr.detach()" class="btn btn-warning">detach</button>
    <button (click)="cdr.reattach()" class="btn btn-warning">attach</button>

    <pre>{{ user | json }}</pre>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondComponent {
  constructor(public cdr: ChangeDetectorRef) {
    /* this.cdr.detach(); */
    /*     setTimeout(() => {
      this.message += ' new value';
    }, 1000); */
  }
  message = 'In Second';
  @Input() user!: User;
  get messageCd() {
    console.log('CD in Second');
    return this.message;
  }
  sayCc() {
    console.log('cc');
  }
  mfc() {
    console.log('mfc');

    this.cdr.markForCheck();
  }
}
