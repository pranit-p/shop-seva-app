import { TestBed } from '@angular/core/testing';

import { ProducttransactionService } from './producttransaction.service';

describe('ProducttransactionService', () => {
  let service: ProducttransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducttransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
