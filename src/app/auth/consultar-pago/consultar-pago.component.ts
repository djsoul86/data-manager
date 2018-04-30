import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent, MatDialog, Sort } from '@angular/material';
import { PagoModel } from '../crear-pago/models/pago.model';
import { ConsultarpagoService } from './services/consultarpago.service';
import { Pendiente } from '../crear-pendientes/models/pendiente.model';
import { HttpErrorResponse } from '@angular/common/http';
import { EditConsultarpagoComponent } from './edit-consultarpago/edit-consultarpago.component';
import { FileService } from '../../utils/file.service';
import { MatChipsModule } from '@angular/material/chips';
import { SnackBarUtil } from '../../utils/snackBar.util';
import {MatExpansionModule} from '@angular/material/expansion';
@Component({
  selector: 'app-consultar-pago',
  templateUrl: './consultar-pago.component.html',
  styleUrls: ['./consultar-pago.component.css']
})
export class ConsultarPagoComponent implements OnInit {
  nombrepago = new FormControl('');
  selectedYear: string;
  selectedMonth: string;
  selectedResp: string;
  displayedColumns = ['nombre', 'responsable', 'fecha', 'valor', 'mes', 'pagado', 'actions'];
  dataSource;
  sortedData;
  pagos: Array<PagoModel>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('divTabla') divTabla: ElementRef;

  length = 50;
  pageSize = 15;
  pageSizeOptions = [15, 30, 50];
  pageEvent: PageEvent;
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
  isExtendedRow = (index, item) => item.extend;
  years = [
    { value: '2017', viewValue: '2017' },
    { value: '2018', viewValue: '2018' },
    { value: '2019', viewValue: '2019' }
  ];
  responsables = [
    { Nombre: 'Ernesto' },
    { Nombre: 'Mozart' }
  ];

  constructor(public _pago: PagoModel
    , public consultarp_service: ConsultarpagoService
    , public fileserv: FileService
    , public dialog: MatDialog
    , public snack: SnackBarUtil) { }

  ngOnInit() {
  }

  onSubmitFind(event: Event, pago: PagoModel) {
    if (event != null) {
      event.preventDefault();
    }
    if (pago == null) {
      this._pago.Mes = +this.selectedMonth;
      this._pago.Year = +this.selectedYear;
      this._pago.Responsable = this.selectedResp;
      this._pago.NombrePago = this.nombrepago.value;
    } else {
      this._pago = pago;
    }
    this.consultarp_service.getAll(this._pago).subscribe(
      (data: any) => {
        this.refreshDataTable(data);
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

  refreshDataTable(data: any) {
    if (data.pagos.length > 0) {
      this.pagos = data.pagos;
      this.sortedData = this.pagos.slice();
      this.setTotales(data.pagos, data.ingreso);
      this.divTabla.nativeElement.className = '';
      this.dataSource = new MatTableDataSource<PagoModel>(data.pagos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } else {
      this.divTabla.nativeElement.className = 'matCustom';
      this.snack.openSnackBar('No se encontró Informacion', '')
    }
  }

  setTotales(data: Array<PagoModel>, value: number) {
    var rowTotal = new PagoModel();
    var rowRestante = new PagoModel();
    var total = 0;
    var count = 0;
    rowTotal.NombrePago = 'Total';
    rowTotal.extend = true;
    rowRestante.NombrePago = 'Restante';
    rowRestante.extend = true;
    for (var v in data) {
      total = total + data[count].Valor;
      count++;
    }
    rowTotal.Valor = total;
    rowRestante.Valor = value - total;
    data.push(rowTotal);
    data.push(rowRestante);
  }

  editTipoPago(tipopago: PagoModel, event: Event) {
    this.openDialogToEditTipoPago(tipopago);
  }


  deleteTipoPago(tipopago: PagoModel, event: Event) {
    tipopago.Mes = +this.selectedMonth;
    tipopago.Year = +this.selectedYear;
    tipopago.Responsable = this.selectedResp;
    tipopago.NombrePago = this.nombrepago.value;
    this.refreshDataTable(this.consultarp_service.delete(tipopago).subscribe(
      (data: Array<PagoModel>) => {
        this.refreshDataTable(data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Un error ha ocurrido', err.error.message);
        } else {
          console.log(`Backend ha regresado un error ${err.status}, body fue ${err.error}`);
        }
      }
    ));
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
  openDialogToEditTipoPago(tipopago: PagoModel) {
    tipopago.Pagado;
    const dialogRef = this.dialog.open(EditConsultarpagoComponent,
      {
        data: tipopago,
        height: '500px',
        width: '600px'
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

  downloadFile(tipopago: PagoModel) {
    this.fileserv.downloadFile(tipopago);
  }
}
