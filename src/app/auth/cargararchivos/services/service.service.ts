import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppSettingServiceService } from '../../../config/app-setting-service.service';
import { SnackBarUtil } from '../../../utils/snackBar.util';
import { AppSettings } from '../../../config/AppSettings';

@Injectable()
export class ServiceService {
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


  create(archivo: File,tarjeta:string): any {
    const url = `${this.apiURL}/api/ApiRequest/guardarFile`;
    const formData: FormData = new FormData();
    if (archivo != null) {
      formData.append('File', archivo, archivo.name);
    }
    formData.append('Tipo',tarjeta);
    return this.http.put(url, formData).subscribe(
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
