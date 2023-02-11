import { Component } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css'],
})
export class OfComponent {
  constructor() {
    of([1, 2, 3], new Date(), {
      name: 'sellaouti',
      firstname: 'aymen',
    }).subscribe({
      next: (data) => console.log('[of]', data),
    });
    from([
      1,
      2,
      3,
      new Date(),
      {
        name: 'sellaouti',
        firstname: 'aymen',
      },
    ]).subscribe({
      next: (data) => console.log('[from]', data),
    });
  }
}
