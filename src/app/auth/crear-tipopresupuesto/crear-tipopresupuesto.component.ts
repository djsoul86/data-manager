import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TiposPresupuesto } from './models/tipopresupuesto.model';
import { MatInputModule } from '@angular/material/input';
import { CreartipoprespuestoService } from './services/creartipoprespuesto.service';

@Component({
  selector: 'app-crear-tipopresupuesto',
  templateUrl: './crear-tipopresupuesto.component.html',
  styleUrls: ['./crear-tipopresupuesto.component.css']
})
export class CrearTipopresupuestoComponent implements OnInit {

  constructor(public _tipopresupuesto:TiposPresupuesto
    ,public prespuesto_service:CreartipoprespuestoService) { }

  nombre = new FormControl('',[Validators.required]);

  onSubmitCreate(event:Event){
    event.preventDefault();
    this._tipopresupuesto.NombrePresupuesto = this.nombre.value;
    this.prespuesto_service.create(this._tipopresupuesto);
  }
  ngOnInit() {
  }

}
