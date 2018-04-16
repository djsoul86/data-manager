import { TestBed, inject } from '@angular/core/testing';

import { ConsultarTipopagoService } from './consultar-tipopago.service';

describe('ConsultarTipopagoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultarTipopagoService]
    });
  });

  it('should be created', inject([ConsultarTipopagoService], (service: ConsultarTipopagoService) => {
    expect(service).toBeTruthy();
  }));
});
