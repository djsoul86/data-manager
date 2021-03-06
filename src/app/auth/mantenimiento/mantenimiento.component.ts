import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { links } from './models/links.model';
@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})



export class MantenimientoComponent implements OnInit {

  links: links[];
  
  constructor() { 

    this.links= [ { id:'Consultar Tipos Pago', url:'/consultar-tipopago'},
    { id:'Tipos Pago', url:'/crear-tipopago'},
    { id:'Proyectos', url:'/crear-proyectos'},
    { id:'Cargar Archivo', url:'/cargararchivos'},
    { id:'Crear Ingreso', url:'/crear-ingreso'},
    { id:'Tipo Presupuesto', url:'/crear-tipopresupuesto'},
    { id:'Cargar Spotify', url:'/cargarspotify'}
  ];

  }

  ngOnInit() {
  }

}
