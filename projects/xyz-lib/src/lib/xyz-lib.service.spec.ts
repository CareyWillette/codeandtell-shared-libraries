import { TestBed } from '@angular/core/testing';

import { XyzLibService } from './xyz-lib.service';

describe('XyzLibService', () => {
  let service: XyzLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XyzLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
