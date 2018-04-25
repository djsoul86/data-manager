import { Injectable } from '@angular/core';
import { PassModel } from '../models/pass.model';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { SnackBarUtil } from '../../../utils/snackBar.util';
import { AppSettings } from '../../../config/AppSettings';
import { AppSettingServiceService } from '../../../config/app-setting-service.service';

@Injectable()
export class CrearPassService {

  create(pass: PassModel): any {
    const url = `${this.apiURL}/api/ApiPass/${pass}`;
    return this.http.put(url,pass).subscribe(
      (data => console.log(data)),
      (err:HttpErrorResponse) =>{
       if(err.error instanceof Error){
         console.log('Un error ha ocurrido',err.error.message);
       }else{
         console.log(`Backend ha regresado un error ${err.status}, body fue ${err.error}`);
       }
     },
     () => {
       this.snack.openSnackBar('Se creo el ingreso', 'Guardado');
       console.log('Todo ha terminado...')
     } 
     );
  }
  
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
}
