import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Proyecto } from '../crear-proyectos/models/proyecto.model';
// import { PendientesService } from '../crear-pendientes/services/pendientes.service';
import { PassModel } from './models/pass.model';
import { PendientesService } from '../crear-pendientes/services/pendientes.service';
import { CrearPassService } from './services/crear-pass.service';

@Component({
  selector: 'app-crear-pass',
  templateUrl: './crear-pass.component.html',
  styleUrls: ['./crear-pass.component.css']
})
export class CrearPassComponent implements OnInit {
  
  key = new FormControl('', [Validators.required]);
  descripcion = new FormControl('', [Validators.required]);
  valor = new FormControl('', [Validators.required]);
  selectedValue: string;
  proyectos: Proyecto[];
  constructor(public _pass:PassModel
    ,public pendientes_service:PendientesService
  ,public crearp_service:CrearPassService) { }
    
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

  onSubmitCreate(event: Event) {
    event.preventDefault();
    this._pass.Key = this.key.value;
    this._pass.Proyecto = this.selectedValue;
    this._pass.Descripcion = this.descripcion.value;
    this._pass.Value = this.valor.value;
    this.crearp_service.create(this._pass);

  }
}
