import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { TipoPago } from '../../consultar-tipopago/models/tipopago-model';
import { PagoModel } from '../models/pago.model';

@Injectable()
export class CrearpagoService {

  apiURL: 'http://localhost:49800/';
  constructor(public http: HttpClient, public snackBar: MatSnackBar) {
    this.apiURL = 'http://localhost:49800/';
  }

  getAll() {
    const url = `${this.apiURL}/api/ApiFinanciero/obtenerTiposPago`;
    return this.http.get(url);
  }

  create(pago: PagoModel, archivo: File): any {
    const url = `${this.apiURL}/api/ApiFinanciero/guardarPago`;
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
        this.openSnackBar('Se creo el ingreso', 'Guardado');
        console.log('Todo ha terminado...')
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
