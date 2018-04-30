import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TCredito } from '../models/Tcredito.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { AppSettingServiceService } from '../../../config/app-setting-service.service';
import { AppSettings } from '../../../config/AppSettings';

@Injectable()
export class ConsumotcService {
  apiURL: string;
  private settings: AppSettings;
  constructor(public http: HttpClient, public snackBar: MatSnackBar
    ,public appSettingsService: AppSettingServiceService) {
      this.appSettingsService.getSettings().subscribe(settings => this.settings = settings,
        () => null,
        () => {
          this.apiURL = this.settings.defaultUrl;
        });
  }

  getAll(pendiente: TCredito) {
    const url = `${this.apiURL}/api/ApiFinanciero/obtenerTarjetas/${pendiente}`;
    return this.http.post<TCredito>(url, pendiente)
  };
}
