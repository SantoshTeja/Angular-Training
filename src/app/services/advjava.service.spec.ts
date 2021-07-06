import { TestBed } from '@angular/core/testing';

import { AdvjavaService } from './advjava.service';

describe('AdvjavaService', () => {
  let service: AdvjavaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvjavaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
