import { Injectable } from '@angular/core';
import { Proyecto } from '../../crear-proyectos/models/proyecto.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Pendiente } from '../models/pendiente.model';
import { SnackBarUtil } from '../../../utils/snackBar.util';
import { AppSettings } from '../../../config/AppSettings';
import { AppSettingServiceService } from '../../../config/app-setting-service.service';

@Injectable()
export class PendientesService {
  
  create(pendiente: Pendiente): any {
    const url = `${this.apiURL}/api/ApiPendientes/${pendiente}`;
    return this.http.put<Pendiente>(url,pendiente).subscribe(
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

  getAll():Observable<Proyecto>{
    const url= `${this.apiURL}/api/ApiProyecto`;
    return this.http.get<Proyecto>(url);
  }

  getPendientes(value:Pendiente):Observable<Pendiente>{
    const url = `${this.apiURL}/api/ApiPendientes/${value}`;
    return this.http.post<Pendiente>(url,value);
  }
 
}
