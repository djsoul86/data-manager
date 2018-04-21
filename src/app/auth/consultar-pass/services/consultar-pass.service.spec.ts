import { TestBed, inject } from '@angular/core/testing';

import { ConsultarPassService } from './consultar-pass.service';

describe('ConsultarPassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultarPassService]
    });
  });

  it('should be created', inject([ConsultarPassService], (service: ConsultarPassService) => {
    expect(service).toBeTruthy();
  }));
});
