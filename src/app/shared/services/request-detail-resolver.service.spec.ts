import { TestBed } from '@angular/core/testing';

import { RequestDetailResolverService } from './request-detail-resolver.service';

describe('RequestDetailResolverService', () => {
  let service: RequestDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
