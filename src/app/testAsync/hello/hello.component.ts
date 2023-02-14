import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  message = '';
  constructor() {}

  sayHello() {
    setTimeout(() => {
      this.message = 'hello world';
    }, 1000);
  }
}
