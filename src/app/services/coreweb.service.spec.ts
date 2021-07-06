import { TestBed } from '@angular/core/testing';

import { CorewebService } from './coreweb.service';

describe('CorewebService', () => {
  let service: CorewebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorewebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
