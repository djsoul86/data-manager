import { TestBed, inject } from '@angular/core/testing';

import { AppSettingServiceService } from './app-setting-service.service';

describe('AppSettingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppSettingServiceService]
    });
  });

  it('should be created', inject([AppSettingServiceService], (service: AppSettingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
