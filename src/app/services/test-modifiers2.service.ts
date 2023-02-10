import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestModifiers2Service {

  constructor() { }
  test() {
    console.log('in TestModifiersService 2');
  }
}
