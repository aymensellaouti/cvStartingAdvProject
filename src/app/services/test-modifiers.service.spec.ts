import { TestBed } from '@angular/core/testing';

import { TestModifiersService } from './test-modifiers.service';

describe('TestModifiersService', () => {
  let service: TestModifiersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestModifiersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
