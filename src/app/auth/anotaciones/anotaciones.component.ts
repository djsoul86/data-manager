import { Component, OnInit } from '@angular/core';
import { links } from '../mantenimiento/models/links.model';

@Component({
  selector: 'app-anotaciones',
  templateUrl: './anotaciones.component.html',
  styleUrls: ['./anotaciones.component.css']
})
export class AnotacionesComponent implements OnInit {
  links: links[];
  constructor() {
    this.links = [
      { id: 'Crear Anotacion', url: '/crear-anotaciones' },
      { id: 'Consultar Anotaciones', url: '/consultar-anotaciones' }
    ];
  }
  
  ngOnInit() {
  }

}
