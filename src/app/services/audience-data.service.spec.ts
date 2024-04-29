import { TestBed } from '@angular/core/testing';

import { AudienceDataService } from './audience-data.service';

describe('AudienceDataService', () => {
  let service: AudienceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudienceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
