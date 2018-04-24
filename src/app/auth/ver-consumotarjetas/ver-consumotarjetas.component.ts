import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TCredito } from './models/Tcredito.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ConsumotcService } from './services/consumotc.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ver-consumotarjetas',
  templateUrl: './ver-consumotarjetas.component.html',
  styleUrls: ['./ver-consumotarjetas.component.css']
})
export class VerConsumotarjetasComponent implements OnInit {
  displayedColumns = ['tipo', 'fecha', 'descripcion', 'valor'];
  dataSource;
  selectedCard: string;
  selectedMonth: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('divTabla') divTabla: ElementRef;


  cards = [
    { val: '1', viewValue: 'Visa' },
    { val: '2', viewValue: 'Master' }
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
  constructor(public consumot_service: ConsumotcService
    , private tarjeta: TCredito
  ) { }
  isExtendedRow = (index, item) => item.extend;
  ngOnInit() {
  }

  onSubmitFind(event: Event) {
    event.preventDefault();
    this.tarjeta.Mes = +this.selectedMonth;
    this.tarjeta.IdTarjeta = this.selectedCard;
    this.consumot_service.getAll(this.tarjeta).subscribe(
      (data: any) => {
        console.log(data);
        if (data.length > 0) {
          this.setTotales(data);
          this.divTabla.nativeElement.className = '';
          this.dataSource = new MatTableDataSource<TCredito>(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.divTabla.nativeElement.className = 'matCustom';
          this.consumot_service.openSnackBar('No se encontró Informacion', '')
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Un error ha ocurrido', err.error.message);
        } else {
          console.log(`Backend ha regresado un error ${err.status}, body fue ${err.error}`);
        }
      }
    );
  }
  setTotales(data: Array<TCredito>) {
    var tDebito = new TCredito();
    var tCredito = new TCredito();
    var totDeb = 0;
    var totCred = 0;
    var count = 0;
    tDebito.TipoTransaccion = 'Total Gastado:';
    tDebito.extend = true;
    tCredito.TipoTransaccion = 'Total Pagado:';
    tCredito.extend = true;

    for (var v in data) // for acts as a foreach  
    {
      console.log(data[count].TipoTransaccion);
      if (data[count].TipoTransaccion == 'Débito') {
        totDeb = totDeb + data[count].Valor;
      }else{
        totCred = totCred + data[count].Valor;
      }
      count++;
    }
    tDebito.Valor = totDeb;
    tCredito.Valor = totCred;
    data.push(tDebito);
    data.push(tCredito);
  }

}
