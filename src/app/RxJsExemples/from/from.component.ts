import { Component } from '@angular/core';
import { from, tap } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css'],
})
export class FromComponent {
  from$ = from('Bonjour');

  constructor() {
    this.from$.pipe(tap((value) => console.log('value : ', value))).subscribe();
  }
}
