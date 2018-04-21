import { Injectable } from '@angular/core';
import { PassModel } from '../models/pass.model';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class CrearPassService {

  create(pass: PassModel): any {
    const url = `${this.apiURL}/api/ApiPass/${pass}`;
    return this.http.put(url,pass).subscribe(
      (data => console.log(data)),
      (err:HttpErrorResponse) =>{
       if(err.error instanceof Error){
         console.log('Un error ha ocurrido',err.error.message);
       }else{
         console.log(`Backend ha regresado un error ${err.status}, body fue ${err.error}`);
       }
     },
     () => {
      this.openSnackBar('Se creo el ingreso', 'Guardado');
       console.log('Todo ha terminado...')
     } 
     );
  }
  
  apiURL:'http://localhost:49800/';
  constructor(public http:HttpClient,public snackBar: MatSnackBar) { 
    this.apiURL = 'http://localhost:49800/';
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
