import { TestBed } from '@angular/core/testing';

import { AdvwebService } from './advweb.service';

describe('AdvwebService', () => {
  let service: AdvwebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvwebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
