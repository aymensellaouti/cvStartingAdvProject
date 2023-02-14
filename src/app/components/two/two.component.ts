import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent {
  two = 'init value';
  get messageCd() {
    console.log('CD in TwoComponent');
    return this.two;
  }
}
