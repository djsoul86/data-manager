import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { ConsultarTipopagoService } from '../services/consultar-tipopago.service';
import { TipoPago } from '../models/tipopago-model';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-tipopago',
  templateUrl: './edit-tipopago.component.html',
  styleUrls: ['./edit-tipopago.component.css']
})
export class EditTipopagoComponent implements OnInit {
  isBeingSaved = false;
  nombrepago = new FormControl('',[Validators.required]);
  valor = new FormControl('',[Validators.required])
  promedio = new FormControl('',[Validators.required])
  fijo = new FormControl('',[Validators.required])

  constructor(public dialogRef:MatDialogRef<EditTipopagoComponent>
    ,public consultartipopago_service:ConsultarTipopagoService
    ,@Inject(MAT_DIALOG_DATA) public tipopago:any) { }


    getErrorMessageForName(){
      return this.nombrepago.hasError('required') ?
      'Por favor ingresa un valor' : '' ;
    }
  
    getErrorMessageForValue(){
      return this.valor.hasError('required') ?
      'Por favor ingresa una URL valida' : '' ;
    }

    onSubmit(event:Event){
      event.preventDefault();
      // console.log(this.title.value,this.url.value);
      this.isBeingSaved = true;
      this.consultartipopago_service.update(this.tipopago).subscribe(
        (data:TipoPago) =>{
         console.log('TipoPago actualizado',data) 
         this.isBeingSaved = false;
         this.dialogRef.close();
        },
        (err:HttpErrorResponse) =>{
          if(err.error instanceof Error){
            console.log('Un error ha ocurrido',err.error.message);
          }else{
            console.log(`Backend ha regresado un error ${err.status}, body fue ${err.error}`);
          }
        },
        () => {
          console.log('Todo ha terminado...')
        }
      );
    }

  ngOnInit() {
  }

  
}
