import { TestBed, inject } from '@angular/core/testing';

import { CrearanotacionesService } from './crearanotaciones.service';

describe('CrearanotacionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearanotacionesService]
    });
  });

  it('should be created', inject([CrearanotacionesService], (service: CrearanotacionesService) => {
    expect(service).toBeTruthy();
  }));
});
