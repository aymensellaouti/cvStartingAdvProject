import { TestBed } from '@angular/core/testing';

import { CanLoadCvGuard } from './can-load-cv.guard';

describe('CanLoadCvGuard', () => {
  let guard: CanLoadCvGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLoadCvGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
