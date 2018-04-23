import { Injectable } from '@angular/core';
import { PagoModel } from '../../crear-pago/models/pago.model';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { SimpleSnackBar, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConsultarpagoService {

  apiURL: 'http://localhost:49800/';

  constructor(public http: HttpClient, public snackBar: MatSnackBar) {
    this.apiURL = 'http://localhost:49800/';
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

  delete(model: PagoModel) {
    console.log(model);
    const url = `${this.apiURL}/api/ApiFinanciero/${model.Id}`;
    return this.http.delete(url).subscribe(
      (data: PagoModel) => {
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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
