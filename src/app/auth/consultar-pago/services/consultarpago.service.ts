import { Injectable } from '@angular/core';
import { PagoModel } from '../../crear-pago/models/pago.model';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { SimpleSnackBar, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConsultarpagoService {

  apiURL: 'http://localhost:49800/';

  constructor(public http: HttpClient,public snackBar:MatSnackBar) {
    this.apiURL = 'http://localhost:49800/';
  }

  getAll(pendiente: PagoModel) {
    const url = `${this.apiURL}/api/ApiFinanciero/obtenerPago/${pendiente}`;
    return this.http.post<PagoModel>(url, pendiente);
  };

  update(tipopago:PagoModel):Observable<any>{
    const url = `${this.apiURL}/api/ApiRequest/${tipopago}`;
    return this.http.put(url,tipopago);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
