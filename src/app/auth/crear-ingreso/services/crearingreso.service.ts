import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Ingreso } from '../models/ingreso.model';
import { MatSnackBar } from '@angular/material';
import { SnackBarUtil } from '../../../utils/snackBar.util';
import { AppSettingServiceService } from '../../../config/app-setting-service.service';
import { AppSettings } from '../../../config/AppSettings';

@Injectable()
export class CrearingresoService {
  apiURL: string;
  private settings: AppSettings;
  constructor(public httpClient: HttpClient
    , public appSettingsService: AppSettingServiceService
    , public snack: SnackBarUtil) {
    this.appSettingsService.getSettings().subscribe(settings => this.settings = settings,
      () => null,
      () => {
        this.apiURL = this.settings.defaultUrl;
      });
  }

  create(value: Ingreso) {

    const url = `${this.apiURL}/api/ApiIngreso/${value}`;
    return this.httpClient.put(url, value).subscribe(
      (data => console.log(data)),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Un error ha ocurrido', err.error.message);
        } else {
          console.log(`Backend ha regresado un error ${err.status}, body fue ${err.error}`);
        }
      },
      () => {
        this.snack.openSnackBar('Se creo el ingreso', 'Guardado');
        console.log('Todo ha terminado...')
      }
    );
  }
}
