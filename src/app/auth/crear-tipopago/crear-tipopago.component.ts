import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-crear-tipopago',
  templateUrl: './crear-tipopago.component.html',
  styleUrls: ['./crear-tipopago.component.css']
})
export class CrearTipopagoComponent implements OnInit {
  checked = false;
  constructor() { }

  ngOnInit() {
  }

}
