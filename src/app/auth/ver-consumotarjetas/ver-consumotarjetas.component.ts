import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TCredito } from './models/Tcredito.model';
import { MatPaginator, MatSort, MatTableDataSource, Sort, PageEvent } from '@angular/material';
import { ConsumotcService } from './services/consumotc.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackBarUtil } from '../../utils/snackBar.util';

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
  selectedYear:string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('divTabla') divTabla: ElementRef;
  length = 50;
  pageSize = 5;
  pageSizeOptions = [5, 10, 20];
  pageEvent: PageEvent;
  sortedData;
  pagos: Array<TCredito>;
  cards = [
    { val: '1', viewValue: 'Visa' },
    { val: '2', viewValue: 'Master' },
    { val: '3', viewValue: 'Citi' }
  ];

  years = [
    { val: '1', viewValue: '2017' },
    { val: '2', viewValue: '2018' },
    { val: '3', viewValue: '2019' }
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
    , private snack: SnackBarUtil
  ) { }
  isExtendedRow = (index, item) => item.extend;
  ngOnInit() {
  }

  onSubmitFind(event: Event) {
    event.preventDefault();
    this.tarjeta.Mes = +this.selectedMonth;
    this.tarjeta.IdTarjeta = this.selectedCard;
    this.tarjeta.Year = +this.selectedYear;
    this.consumot_service.getAll(this.tarjeta).subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.pagos = data;
          this.setTotales(data);
          this.divTabla.nativeElement.className = '';
          this.dataSource = new MatTableDataSource<TCredito>(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.divTabla.nativeElement.className = 'matCustom';
          this.snack.openSnackBar('No se encontró Informacion', '')
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

    for (var v in data) 
    {
      
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

  sortData(sort: Sort) {
    const data = this.pagos.slice();
    var rest = data[data.length - 1];
    var tot = data[data.length - 2];
    var index = data.indexOf(rest, 0);
    var indext = data.indexOf(tot, 0);
    if (index > -1) {
      data.splice(index, 1);
    }
    
    if (indext > -1) {
      data.splice(indext, 1);
    }
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }
    this.dataSource = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'tipo': return this.compare(a.TipoTransaccion, b.TipoTransaccion, isAsc);
        case 'fecha': return this.compare(a.FechaTransaccion, b.FechaTransaccion, isAsc);
        case 'valor': return this.compare(a.Valor, b.Valor, isAsc);
        default: return 0;
      }
    });
    this.dataSource.push(tot);
    this.dataSource.push(rest);
  }
  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
