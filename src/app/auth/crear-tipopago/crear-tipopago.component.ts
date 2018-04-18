import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule} from '@angular/material/button';
import { ConsultarTipopagoService } from '../consultar-tipopago/services/consultar-tipopago.service';
import { TipoPago } from '../consultar-tipopago/models/tipopago-model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-tipopago',
  templateUrl: './crear-tipopago.component.html',
  styleUrls: ['./crear-tipopago.component.css']
})
export class CrearTipopagoComponent implements OnInit {
  
  constructor(public consultartipopago_service:ConsultarTipopagoService,
  public tipopago:TipoPago) { }
  
  nombrepago = new FormControl('',[Validators.required]);
  promedio = new FormControl('',[Validators.required]);
  valor = new FormControl('',[Validators.required]);
  fijo = new FormControl('',[Validators.required]);
 
  onSubmitCreate(event:Event){
    event.preventDefault();
    console.log(this.fijo.value);
    this.tipopago.NombrePago = this.nombrepago.value;
    this.tipopago.Promedio = this.promedio.value;
    this.tipopago.Valor = this.valor.value;
    this.tipopago.Fijo = this.fijo.value;
    this.consultartipopago_service.create(this.tipopago);
  }

  ngOnInit() {
  }

}
