import { Component, OnInit } from '@angular/core';
import { links } from '../mantenimiento/models/links.model';

@Component({
  selector: 'app-financiero',
  templateUrl: './financiero.component.html',
  styleUrls: ['./financiero.component.css']
})
export class FinancieroComponent implements OnInit {

  links: links[];
  
  constructor() { 

    this.links= [ 
    { id:'Crear Pago', url:'/crear-pago'},
    { id:'Consultar Pago', url:'/consultar-pago'},
    { id:'Ver consumo Tarjetas', url:'/ver-consumotarjetas'},
    { id:'Presupuestos', url:'/presupuestos'}]
  }
  ngOnInit() {
  }

}
