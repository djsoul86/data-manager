import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PassModel } from '../../crear-pass/models/pass.model';
import { AppSettings } from '../../../config/AppSettings';
import { AppSettingServiceService } from '../../../config/app-setting-service.service';

@Injectable()
export class ConsultarPassService {
  apiURL:string;
  private settings: AppSettings;
  constructor(public http:HttpClient
    ,public appSettingsService:AppSettingServiceService) { 
    this.appSettingsService.getSettings().subscribe(settings=> this.settings = settings,
      () => null,
      () => {
        this.apiURL = this.settings.defaultUrl;
      });
  }

  getAll(pass: PassModel) {
    const url = `${this.apiURL}/api/ApiPass/${pass}`;
    return this.http.post(url, pass);
  };
}
