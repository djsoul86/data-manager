import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Ingreso } from './models/ingreso.model';
import { CrearingresoService } from './services/crearingreso.service';

@Component({
  selector: 'app-crear-ingreso',
  templateUrl: './crear-ingreso.component.html',
  styleUrls: ['./crear-ingreso.component.css']
})
export class CrearIngresoComponent implements OnInit {

  descripcion = new FormControl('',[Validators.required]);
  salario = new FormControl('',[Validators.required]);
  value = new FormControl('',[Validators.required]);
  selectedYear:string;
  selectedValue: string;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  months = [
    {val: '1', viewValue: 'Enero'},
    {val: '2', viewValue: 'Febrero'},
    {val: '3', viewValue: 'Marzo'},
    {val: '4', viewValue: 'Abril'},
    {val: '5', viewValue: 'Mayo'},
    {val: '6', viewValue: 'Junio'},
    {val: '7', viewValue: 'Julio'},
    {val: '8', viewValue: 'Agosto'},
    {val: '9', viewValue: 'Septiembre'},
    {val: '10', viewValue: 'Octubre'},
    {val: '11', viewValue: 'Noviembre'},
    {val: '12', viewValue: 'Diciembre'},
  ];

  years = [
    {value: '2017', viewValue: '2017'},
    {value: '2018', viewValue: '2018'},
    {value: '2019', viewValue: '2019'}
  ];
  constructor(public ingreso:Ingreso,public crear_ingresoservice:CrearingresoService) { }

  onSubmitCreate(event:Event){
    event.preventDefault();
    this.ingreso.Descripcion = this.descripcion.value;
    this.ingreso.Mes = +this.selectedValue;
    this.ingreso.Year = +this.selectedYear;
    this.ingreso.Salario = this.salario.value;
    this.ingreso.Value = this.value.value;
    this.crear_ingresoservice.create(this.ingreso);
  }
  ngOnInit() {
  }

}
