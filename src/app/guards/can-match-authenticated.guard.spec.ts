import { TestBed } from '@angular/core/testing';

import { CanMatchAuthenticatedGuard } from './can-match-authenticated.guard';

describe('CanMatchAuthenticatedGuard', () => {
  let guard: CanMatchAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanMatchAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
