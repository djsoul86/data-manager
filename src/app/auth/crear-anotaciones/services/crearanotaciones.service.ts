import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Anotacion } from '../models/anotacion.model';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class CrearanotacionesService {
  apiURL:'http://localhost:49800/';
  constructor(public httpClient:HttpClient,public snackBar: MatSnackBar) { 
    this.apiURL = 'http://localhost:49800/';
  }

  

  create(pendiente: Anotacion,archivo:File): any {
    const url = `${this.apiURL}/api/ApiAnotaciones`;
    const formData: FormData = new FormData();
    formData.append('File', archivo, archivo.name);
    formData.append('Proyecto',pendiente.Proyecto);

    pendiente.File = new FormData();
    
    
    return this.httpClient.post(url,formData).subscribe(
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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  postFile(fileToUpload: File){
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient.post(endpoint, formData).subscribe(
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
      
}


}
