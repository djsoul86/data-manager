import { Component, OnInit } from '@angular/core';
import { links } from '../mantenimiento/models/links.model';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {
  links: links[];
  constructor() {
    this.links = [
      { id: 'Crear Pendientes', url: '/crear-pendientes' },
      { id: 'Consultar Pendientes', url: '/consultar-pendientes' }
    ];
  }

  ngOnInit() {
  }

}
