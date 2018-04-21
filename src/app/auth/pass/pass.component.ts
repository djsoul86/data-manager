import { Component, OnInit } from '@angular/core';
import { links } from '../mantenimiento/models/links.model';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {

  links: links[];
  constructor() {
    this.links = [
      { id: 'Crear Pass', url: '/crear-pass' },
      { id: 'Consultar Pass', url: '/consultar-pass' }
    ];
  }
  ngOnInit() {
  }

}
