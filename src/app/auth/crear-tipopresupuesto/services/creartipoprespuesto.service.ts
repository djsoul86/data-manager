import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TiposPresupuesto } from '../models/tipopresupuesto.model';
import { MatSnackBar } from '@angular/material';
import { AppSettings } from '../../../config/AppSettings';
import { AppSettingServiceService } from '../../../config/app-setting-service.service';
import { SnackBarUtil } from '../../../utils/snackBar.util';
import { PresupuestoModel } from '../../crear-presupuestos/models/presupuesto.model';

@Injectable()
export class CreartipoprespuestoService {
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

  create(value: TiposPresupuesto) {

    const url = `${this.apiURL}/api/ApiPresupuestos/${value}`;
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
        this.snack.openSnackBar('Se creo el tipo presupuesto', 'Guardado');
        console.log('Todo ha terminado...')
      }
    );
  }

  getAll():Observable<TiposPresupuesto>{
    const url= `${this.apiURL}/api/ApiPresupuestos`;
    return this.http.get<TiposPresupuesto>(url);
  }

  crearPresupuesto(presup:PresupuestoModel){
    const url = `${this.apiURL}/api/ApiPresupuestos/obtenerPresupuesto/${presup}`;
    return this.http.post(url, presup);
  }

  eliminarPresupuesto(model:PresupuestoModel):Observable<any> {
    const url = `${this.apiURL}/api/ApiPresupuestos/eliminarPresupuesto/${model}`;
    return this.http.post<PresupuestoModel>(url,model);
  }

}