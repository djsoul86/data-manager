import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConsultarpagoService } from '../services/consultarpago.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PagoModel } from '../../crear-pago/models/pago.model';
import { DISABLED } from '@angular/forms/src/model';
import { SnackBarUtil } from '../../../utils/snackBar.util';

@Component({
  selector: 'app-edit-consultarpago',
  templateUrl: './edit-consultarpago.component.html',
  styleUrls: ['./edit-consultarpago.component.css']
})
export class EditConsultarpagoComponent implements OnInit {
  isBeingSave = false;
  nombrepago = new FormControl(this.newMethod());
  responsable = new FormControl('',[Validators.required])
  valor = new FormControl('',[Validators.required])
  mes = new FormControl('',[Validators.required])
  pagado = new FormControl('',[Validators.required])
  fileToUpload: File = null;
  constructor(public dialogRef:MatDialogRef<EditConsultarpagoComponent>
    ,public consultar_pagoservice:ConsultarpagoService
    ,public snack:SnackBarUtil
    ,@Inject(MAT_DIALOG_DATA) public tipopago:any) { 
      this.nombrepago.disable();
      this.responsable.disable();
      this.mes.disable();
    }


  private newMethod(): any {
    return { disabled: true };
  }

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
      this.tipopago.Pagado = this.pagado.value;
      this.isBeingSave = true;
      this.consultar_pagoservice.update(this.tipopago,this.fileToUpload).subscribe(
        (data:PagoModel) =>{
         this.snack.openSnackBar('Se actualizó el pago','')
         this.isBeingSave = false;
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
    handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
    }
  ngOnInit() {
  }

  
}
