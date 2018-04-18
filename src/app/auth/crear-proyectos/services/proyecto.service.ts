import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Proyecto } from '../models/proyecto.model';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ProyectoService {
  apiURL:'http://localhost:49800';
  constructor(public http:HttpClient,public snackBar: MatSnackBar) { 
    this.apiURL = 'http://localhost:49800';
  }

  create(value:Proyecto){
    
    const url = `${this.apiURL}/api/ApiProyecto/${value}`;
    //  return this.http.get<any>(url);
    console.log(value.Nombre);
    console.log(url);
    return this.http.put(url,value).subscribe(
      (data => console.log(data)),
      (err:HttpErrorResponse) =>{
       if(err.error instanceof Error){
         console.log('Un error ha ocurrido',err.error.message);
       }else{
         console.log(`Backend ha regresado un error ${err.status}, body fue ${err.error}`);
       }
     },
     () => {
      this.openSnackBar('Se creo el proyecto', 'Guardado');
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
