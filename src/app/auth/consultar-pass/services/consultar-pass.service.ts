import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PassModel } from '../../crear-pass/models/pass.model';

@Injectable()
export class ConsultarPassService {
  apiURL: 'http://localhost:49800/';

  constructor(public http: HttpClient) {
    this.apiURL = 'http://localhost:49800/';
  }

  getAll(pass: PassModel) {
    const url = `${this.apiURL}/api/ApiPass/${pass}`;
    return this.http.post(url, pass);
  };
}
