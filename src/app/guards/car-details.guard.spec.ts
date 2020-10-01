import { TestBed } from '@angular/core/testing';

import { CarDetailsGuard } from './car-details.guard';

describe('CarDetailsGuard', () => {
  let guard: CarDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CarDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
