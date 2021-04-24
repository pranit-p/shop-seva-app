import { TestBed } from '@angular/core/testing';

import { UsertransactionService } from './usertransaction.service';

describe('UsertransactionService', () => {
  let service: UsertransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsertransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
