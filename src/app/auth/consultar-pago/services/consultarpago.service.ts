import { Injectable } from '@angular/core';
import { PagoModel } from '../../crear-pago/models/pago.model';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { SimpleSnackBar, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../../../config/AppSettings';
import { AppSettingServiceService } from '../../../config/app-setting-service.service';

@Injectable()
export class ConsultarpagoService {

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

  getAll(pendiente: PagoModel): Observable<any> {
    const url = `${this.apiURL}/api/ApiFinanciero/obtenerPago/${pendiente}`;
    return this.http.post<PagoModel>(url, pendiente);
  };

  update(pago: PagoModel, archivo: File): any {
    const url = `${this.apiURL}/api/ApiFinanciero/guardarPago`;
    console.log(pago.Pagado);
    const formData: FormData = new FormData();
    if (archivo != null) {
      formData.append('File', archivo, archivo.name);
    }
    formData.append('NombrePago', pago.NombrePago);
    formData.append('Valor', pago.Valor.toString());
    formData.append('Mes', pago.Mes.toString());
    formData.append('Responsable', pago.Responsable);
    formData.append('Year', String(pago.Year));
    formData.append('Pagado', String(pago.Pagado));
    formData.append('Actualizar', 'true');
    return this.http.put(url, formData);
  }

  delete(model: PagoModel):Observable<any> {
    const url = `${this.apiURL}/api/ApiFinanciero/eliminarPago/${model}`;
    return this.http.post<PagoModel>(url,model);
  }

  
}
