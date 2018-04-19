import { Injectable } from '@angular/core';
import { Proyecto } from '../../crear-proyectos/models/proyecto.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Pendiente } from '../models/pendiente.model';

@Injectable()
export class PendientesService {
  apiURL:'http://localhost:49800/';
  constructor(public http:HttpClient,public snackBar: MatSnackBar) { 
    this.apiURL = 'http://localhost:49800/';
  }

  getAll():Observable<Proyecto>{
    const url= `${this.apiURL}/api/ApiProyecto`;
    return this.http.get<Proyecto>(url);
  }

  create(value:Pendiente){
    
    const url = `${this.apiURL}/api/ApiPendientes/${value}`;
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
      this.openSnackBar('Se creo pendiente', 'Guardado');
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
