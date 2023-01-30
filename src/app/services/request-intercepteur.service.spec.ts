import { TestBed } from '@angular/core/testing';

import { RequestIntercepteurService } from './request-intercepteur.service';

describe('RequestIntercepteurService', () => {
  let service: RequestIntercepteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestIntercepteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
