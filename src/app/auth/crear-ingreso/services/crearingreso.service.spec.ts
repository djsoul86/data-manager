import { TestBed, inject } from '@angular/core/testing';

import { CrearingresoService } from './crearingreso.service';

describe('CrearingresoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearingresoService]
    });
  });

  it('should be created', inject([CrearingresoService], (service: CrearingresoService) => {
    expect(service).toBeTruthy();
  }));
});
