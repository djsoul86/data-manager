import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TipoPago } from '../models/tipopago-model';
import { TipoPagoResponse } from '../models/tipopago-response.model';
import { AppSettingServiceService } from '../../../config/app-setting-service.service';
import { AppSettings } from '../../../config/AppSettings';

@Injectable()
export class ConsultarTipopagoService {
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

  getAll():Observable<TipoPagoResponse>{
    const url= `${this.apiURL}/api/ApiRequest`;
    console.log('consultando tipo pago' + url)
    return this.http.get<TipoPagoResponse>(url);
  }

  update(tipopago:TipoPago):Observable<any>{
    const url = `${this.apiURL}/api/ApiRequest/${tipopago}`;
    return this.http.put(url,tipopago);
  }

  delete(tipopago:TipoPago):Observable<any>{
    const url = `${this.apiURL}/api/ApiRequest/${tipopago.Id}`;
    return this.http.delete(url);
  }

  create(tipopago:TipoPago){
    const url = `${this.apiURL}/api/ApiRequest/createTipo`;
    return this.http.post(url,tipopago).subscribe(
     (data => console.log(data)),
     (err:HttpErrorResponse) =>{
      if(err.error instanceof Error){
        console.log('Un error ha ocurrido',err.error.message);
      }else{
        console.log(`Backend ha regresado un error ${err.status}, body fue ${err.error}`);
      }
    },
    () => {
      console.log('Todo ha terminado...')
    } 
    );
  }

}
