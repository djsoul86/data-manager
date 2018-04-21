import { TestBed, inject } from '@angular/core/testing';

import { ConsumotcService } from './consumotc.service';

describe('ConsumotcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsumotcService]
    });
  });

  it('should be created', inject([ConsumotcService], (service: ConsumotcService) => {
    expect(service).toBeTruthy();
  }));
});
