import { TestBed, inject } from '@angular/core/testing';

import { PhysicalAddressService } from './physical-address.service';

describe('PhysicalAddressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhysicalAddressService]
    });
  });

  it('should ...', inject([PhysicalAddressService], (service: PhysicalAddressService) => {
    expect(service).toBeTruthy();
  }));
});
