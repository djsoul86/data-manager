import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Pendiente } from '../../crear-pendientes/models/pendiente.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConsultarpendientesService {
  apiURL: 'http://localhost:49800/';

  constructor(public http: HttpClient) {
    this.apiURL = 'http://localhost:49800/';
  }

  getAll(pendiente: Pendiente) {
    const url = `${this.apiURL}/api/ApiPendientes`;
    return this.http.post<Pendiente>(url, pendiente).subscribe(
      (data => console.log(data)),
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
    );
  };
}

