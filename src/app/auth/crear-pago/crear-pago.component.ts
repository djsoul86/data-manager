import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TipoPago } from '../consultar-tipopago/models/tipopago-model';
import { FormControl, Validators } from '@angular/forms';
import { CrearpagoService } from './services/crearpago.service';
import { PagoModel } from './models/pago.model';
import { DateFormatPipe } from '../pipes/DateFormatPipe';

@Component({
  selector: 'app-crear-pago',
  templateUrl: './crear-pago.component.html',
  styleUrls: ['./crear-pago.component.css']
})
export class CrearPagoComponent implements OnInit {

  @ViewChild('selectD') divTabla: ElementRef;
  dateFormat:DateFormatPipe;
  today = Date.now();
  responsables = [
    { Nombre: 'Ernesto' },
    { Nombre: 'Mozart' }
  ];
  months = [
    { val: '1', viewValue: 'Enero' },
    { val: '2', viewValue: 'Febrero' },
    { val: '3', viewValue: 'Marzo' },
    { val: '4', viewValue: 'Abril' },
    { val: '5', viewValue: 'Mayo' },
    { val: '6', viewValue: 'Junio' },
    { val: '7', viewValue: 'Julio' },
    { val: '8', viewValue: 'Agosto' },
    { val: '9', viewValue: 'Septiembre' },
    { val: '10', viewValue: 'Octubre' },
    { val: '11', viewValue: 'Noviembre' },
    { val: '12', viewValue: 'Diciembre' },
  ];
  tipospago: TipoPago[];
  selectedResp: string;
  selectedValue: string;
  selectedMonth: string;
  selectedYear:string;
  fileToUpload: File = null;
  nombre = new FormControl('', [Validators.required]);
  valor = new FormControl('', [Validators.required]);
  anio = new FormControl('', [Validators.required]);
  test:string;
  pagado = new FormControl('', [Validators.required]);
  constructor(public pag: PagoModel
    , public pagoserv: CrearpagoService) {
      this.test = '2018';
  }

  ngOnInit() {
    this.pagoserv.getAll().subscribe(
      (data: any) => {
        this.tipospago = data;
      },
      error => {
        console.error(error);
      }
    );
  }
  

  onSubmitCreate(event: Event) {
    event.preventDefault();
    this.pag.Mes = +this.selectedMonth;
    this.pag.Responsable = this.selectedResp;
    this.pag.Valor = this.valor.value;
    this.pag.Year = this.divTabla.nativeElement.value;
    if (this.nombre.value == '') {
      this.pag.NombrePago = this.selectedValue;
    } else {
      this.pag.NombrePago = this.nombre.value;
    }
    this.pag.Pagado = this.pagado.value;
    this.pagoserv.create(this.pag, this.fileToUpload)
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}