import { TestBed, inject } from '@angular/core/testing';

import { CrearpagoService } from './crearpago.service';

describe('CrearpagoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearpagoService]
    });
  });

  it('should be created', inject([CrearpagoService], (service: CrearpagoService) => {
    expect(service).toBeTruthy();
  }));
});
