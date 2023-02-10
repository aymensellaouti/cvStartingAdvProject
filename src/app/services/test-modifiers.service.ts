import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestModifiersService {
  constructor() {}

  test() {
    console.log('in TestModifiersService');
  }
}
