import { TestBed } from '@angular/core/testing';

import { DaltonismService } from './daltonism.service';

describe('DaltonismService', () => {
  let service: DaltonismService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaltonismService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
