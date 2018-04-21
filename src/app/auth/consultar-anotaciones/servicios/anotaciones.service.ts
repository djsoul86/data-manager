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


}
