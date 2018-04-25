import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Anotaciones } from '../models/anotacion.model';
import { MatSnackBar } from '@angular/material';
import { SnackBarUtil } from '../../../utils/snackBar.util';
import { AppSettings } from '../../../config/AppSettings';
import { AppSettingServiceService } from '../../../config/app-setting-service.service';

@Injectable()
export class CrearanotacionesService {
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

  create(pendiente: Anotaciones, archivo: File): any {
    const url = `${this.apiURL}/api/ApiAnotaciones`;
    const formData: FormData = new FormData();
    formData.append('File', archivo, archivo.name);
    formData.append('Proyecto', pendiente.Proyecto);
    pendiente.File = new FormData();

    return this.httpClient.post(url, formData).subscribe(
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
