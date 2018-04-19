import { TestBed, inject } from '@angular/core/testing';

import { ConsultarpendientesService } from './consultarpendientes.service';

describe('ConsultarpendientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultarpendientesService]
    });
  });

  it('should be created', inject([ConsultarpendientesService], (service: ConsultarpendientesService) => {
    expect(service).toBeTruthy();
  }));
});
