import { TestBed } from '@angular/core/testing';

import { CvDetailResolver } from './cv-detail.resolver';

describe('CvDetailResolver', () => {
  let resolver: CvDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CvDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
