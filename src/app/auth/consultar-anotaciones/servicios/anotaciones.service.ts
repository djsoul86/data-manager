import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anotaciones } from '../../crear-anotaciones/models/anotacion.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AnotacionesService {
  apiURL: 'http://localhost:49800/';

  constructor(public http: HttpClient) {
    this.apiURL = 'http://localhost:49800/';
  }

  getAll(anotaciones: Anotaciones) {
    const url = `${this.apiURL}/api/ApiAnotaciones/obtenerPorId/${anotaciones}`;
    return this.http.post(url, anotaciones);
  };

  delete(model: Anotaciones) {
    console.log(model);
    const url = `${this.apiURL}/api/ApiAnotaciones/${model.Id}`;
    return this.http.delete(url).subscribe(
      (data: Anotaciones) => {
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

}
