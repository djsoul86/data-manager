import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Proyecto } from '../models/proyecto.model';
import { SnackBarUtil } from '../../../utils/snackBar.util';
import { AppSettings } from '../../../config/AppSettings';
import { AppSettingServiceService } from '../../../config/app-setting-service.service';

@Injectable()
export class ProyectoService {
  apiURL: string;
  private settings: AppSettings;
  constructor(public http: HttpClient
    , public appSettingsService: AppSettingServiceService
    , public snack: SnackBarUtil) {
    this.appSettingsService.getSettings().subscribe(settings => this.settings = settings,
      () => null,
      () => {
        this.apiURL = this.settings.defaultUrl;
      });
  }

  create(value: Proyecto) {
    const url = `${this.apiURL}/api/ApiProyecto/${value}`;
    return this.http.put(url, value).subscribe(
      (data => console.log(data)),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Un error ha ocurrido', err.error.message);
        } else {
          console.log(`Backend ha regresado un error ${err.status}, body fue ${err.error}`);
        }
      },
      () => {
        this.snack.openSnackBar('Se creo el proyecto', 'Guardado');
        console.log('Todo ha terminado...')
      }
    );
  }
}
