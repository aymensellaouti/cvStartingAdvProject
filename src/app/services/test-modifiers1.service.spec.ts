import { TestBed } from '@angular/core/testing';

import { TestModifiers1Service } from './test-modifiers1.service';

describe('TestModifiers1Service', () => {
  let service: TestModifiers1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestModifiers1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
