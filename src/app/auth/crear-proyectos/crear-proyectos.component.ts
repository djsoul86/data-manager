import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProyectoService } from './services/proyecto.service';
import { MatInputModule } from '@angular/material/input';
import { Proyecto } from './models/proyecto.model';

@Component({
  selector: 'app-crear-proyectos',
  templateUrl: './crear-proyectos.component.html',
  styleUrls: ['./crear-proyectos.component.css']
})


export class CrearProyectosComponent implements OnInit {
  
  constructor(public proyecto_service:ProyectoService
    ,public _proyecto:Proyecto) { }

  proyecto = new FormControl('',[Validators.required]);

  onSubmitCreate(event:Event){
    event.preventDefault();
    this._proyecto.Nombre = this.proyecto.value;
    this.proyecto_service.create(this._proyecto);
  }

  ngOnInit() {
  }

}
