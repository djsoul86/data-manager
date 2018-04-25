import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anotaciones } from '../../crear-anotaciones/models/anotacion.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AppSettings } from '../../../config/AppSettings';
import { AppSettingServiceService } from '../../../config/app-setting-service.service';

@Injectable()
export class AnotacionesService {
  apiURL: string;
  private settings: AppSettings;
  constructor(public http: HttpClient
    , public appSettingsService: AppSettingServiceService) {
    this.appSettingsService.getSettings().subscribe(settings => this.settings = settings,
      () => null,
      () => {
        this.apiURL = this.settings.defaultUrl;
      });
  }

  getAll(anotaciones: Anotaciones) {
    const url = `${this.apiURL}/api/ApiAnotaciones/obtenerPorId/${anotaciones}`;
    return this.http.post(url, anotaciones);
  };

  delete(model: Anotaciones) {
    console.log(model);
    const url = `${this.apiURL}/api/ApiAnotaciones/${model.Id}`;
    return this.http.delete(url).subscribe(
      (data: Anotaciones) => {
        console.log('Pago eliminado', data)
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Un error ha ocurrido', err.error.message);
        } else {
          console.log(`Backend ha regresado un error ${err.status}, body fue ${err.error}`);
        }
      },
      () => {
        console.log('Todo ha terminado...')
      }
    );;
  }

}
