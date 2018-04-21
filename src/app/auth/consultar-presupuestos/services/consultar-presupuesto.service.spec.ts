import { TestBed, inject } from '@angular/core/testing';

import { ConsultarPresupuestoService } from './consultar-presupuesto.service';

describe('ConsultarPresupuestoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultarPresupuestoService]
    });
  });

  it('should be created', inject([ConsultarPresupuestoService], (service: ConsultarPresupuestoService) => {
    expect(service).toBeTruthy();
  }));
});
