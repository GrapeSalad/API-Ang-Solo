import { TestBed, inject } from '@angular/core/testing';

import { LatLongService } from './lat-long.service';

describe('LatLongService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LatLongService]
    });
  });

  it('should ...', inject([LatLongService], (service: LatLongService) => {
    expect(service).toBeTruthy();
  }));
});
