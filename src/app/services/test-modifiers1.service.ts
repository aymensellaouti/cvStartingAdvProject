import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestModifiers1Service {
  constructor() {}
  test() {
    console.log('in TestModifiersService1');
  }
}
