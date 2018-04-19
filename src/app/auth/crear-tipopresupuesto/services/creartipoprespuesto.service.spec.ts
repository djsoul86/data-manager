import { TestBed, inject } from '@angular/core/testing';

import { CreartipoprespuestoService } from './creartipoprespuesto.service';

describe('CreartipoprespuestoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreartipoprespuestoService]
    });
  });

  it('should be created', inject([CreartipoprespuestoService], (service: CreartipoprespuestoService) => {
    expect(service).toBeTruthy();
  }));
});
