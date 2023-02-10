import { TestBed } from '@angular/core/testing';

import { TestModifiers2Service } from './test-modifiers2.service';

describe('TestModifiers2Service', () => {
  let service: TestModifiers2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestModifiers2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
