import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../crear-proyectos/models/proyecto.model';
import { PendientesService } from './services/pendientes.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Pendiente } from './models/pendiente.model';

@Component({
  selector: 'app-crear-pendientes',
  templateUrl: './crear-pendientes.component.html',
  styleUrls: ['./crear-pendientes.component.css']
})
export class CrearPendientesComponent implements OnInit {

  pendiente = new FormControl('',[Validators.required]);
  requerimiento = new FormControl('',[Validators.required]);
  selectedValue:string;
  proyectos: Proyecto[];
  constructor(public pendientes_service:PendientesService,
  public _pendiente:Pendiente) { }

  ngOnInit() {
    this.pendientes_service.getAll().subscribe(
      (data:any) =>
    {
      this.proyectos = data;
    },
    error=>{
      console.error(error);
    }
  );
  }

  onSubmitCreate(event:Event){
    event.preventDefault();
    this._pendiente.Pendiente = this.pendiente.value;
    this._pendiente.Proyecto = this.selectedValue;
    this._pendiente.Requerimiento = this.requerimiento.value;
    this.pendientes_service.create(this._pendiente)
  }

}
