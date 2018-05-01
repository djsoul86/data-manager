import { Component, OnInit } from '@angular/core';
import { links } from '../mantenimiento/models/links.model';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {
  links: links[];
  constructor() {
    this.links = [
      { id: 'Crear Presupuesto', url: '/crear-presupuestos' }
    ];
  }
  ngOnInit() {
  }

}
