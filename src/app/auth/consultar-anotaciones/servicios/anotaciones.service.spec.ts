import { TestBed, inject } from '@angular/core/testing';

import { AnotacionesService } from './anotaciones.service';

describe('AnotacionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnotacionesService]
    });
  });

  it('should be created', inject([AnotacionesService], (service: AnotacionesService) => {
    expect(service).toBeTruthy();
  }));
});
