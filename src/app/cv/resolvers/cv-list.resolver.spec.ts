import { TestBed } from '@angular/core/testing';

import { CvListResolver } from './cv-list.resolver';

describe('CvListResolver', () => {
  let resolver: CvListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CvListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
