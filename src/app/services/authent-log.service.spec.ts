import { TestBed } from '@angular/core/testing';

import { AuthentLogService } from './authent-log.service';

describe('AuthentLogService', () => {
  let service: AuthentLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
