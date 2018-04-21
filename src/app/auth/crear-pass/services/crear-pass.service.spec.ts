import { TestBed, inject } from '@angular/core/testing';

import { CrearPassService } from './crear-pass.service';

describe('CrearPassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearPassService]
    });
  });

  it('should be created', inject([CrearPassService], (service: CrearPassService) => {
    expect(service).toBeTruthy();
  }));
});
