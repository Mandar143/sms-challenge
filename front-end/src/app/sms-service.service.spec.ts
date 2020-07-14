import { TestBed } from '@angular/core/testing';

import { SmsServiceService } from './sms-service.service';

describe('SmsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmsServiceService = TestBed.get(SmsServiceService);
    expect(service).toBeTruthy();
  });
});
