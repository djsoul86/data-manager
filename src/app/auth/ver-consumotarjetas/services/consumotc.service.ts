import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TCredito } from '../models/Tcredito.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ConsumotcService {
  apiURL: 'http://localhost:49800/';

  constructor(public http: HttpClient, public snackBar: MatSnackBar) {
    this.apiURL = 'http://localhost:49800/';
  }

  getAll(pendiente: TCredito) {
    const url = `${this.apiURL}/api/ApiFinanciero/obtenerTarjetas/${pendiente}`;
    return this.http.post<TCredito>(url, pendiente)
  };

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
