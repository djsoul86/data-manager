import { TestBed, inject } from '@angular/core/testing';

import { ConsultarpagoService } from './consultarpago.service';

describe('ConsultarpagoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultarpagoService]
    });
  });

  it('should be created', inject([ConsultarpagoService], (service: ConsultarpagoService) => {
    expect(service).toBeTruthy();
  }));
});
