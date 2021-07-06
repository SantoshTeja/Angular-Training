import { TestBed } from '@angular/core/testing';

import { CorejavaService } from './corejava.service';

describe('CorejavaService', () => {
  let service: CorejavaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorejavaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
