import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../crear-proyectos/models/proyecto.model';
import { PendientesService } from '../crear-pendientes/services/pendientes.service';
import { FormControl, Validators } from '@angular/forms';
import { CrearanotacionesService } from './services/crearanotaciones.service';
import { Anotaciones } from './models/anotacion.model';

@Component({
  selector: 'app-crear-anotaciones',
  templateUrl: './crear-anotaciones.component.html',
  styleUrls: ['./crear-anotaciones.component.css']
})
export class CrearAnotacionesComponent implements OnInit {

  proyectos: Proyecto[];
  selectedValue: string;
  fileToUpload: File = null;
  anotacion = new FormControl('', [Validators.required]);
  constructor(public pendientes_service: PendientesService
    ,public crearan_service: CrearanotacionesService
    ,public anotacionObj:Anotaciones) { }

  ngOnInit() {
    this.pendientes_service.getAll().subscribe(
      (data: any) => {
        this.proyectos = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  onSubmitCreate(event:Event){
    event.preventDefault();
    this.anotacionObj.Proyecto = this.selectedValue;
    this.anotacionObj.Anotacion = this.anotacion.value;
    // this.anotacionObj.File = this.fileToUpload;
    console.log(this.anotacionObj);
    this.crearan_service.create(this.anotacionObj,this.fileToUpload)
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}
