import { TestBed, inject } from '@angular/core/testing';

import { PendientesService } from './pendientes.service';

describe('PendientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PendientesService]
    });
  });

  it('should be created', inject([PendientesService], (service: PendientesService) => {
    expect(service).toBeTruthy();
  }));
});
