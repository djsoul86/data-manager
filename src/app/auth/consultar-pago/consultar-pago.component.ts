import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent, MatDialog } from '@angular/material';
import { PagoModel } from '../crear-pago/models/pago.model';
import { ConsultarpagoService } from './services/consultarpago.service';
import { Pendiente } from '../crear-pendientes/models/pendiente.model';
import { HttpErrorResponse } from '@angular/common/http';
import { EditConsultarpagoComponent } from './edit-consultarpago/edit-consultarpago.component';
import { FileService } from '../../utils/file.service';

@Component({
  selector: 'app-consultar-pago',
  templateUrl: './consultar-pago.component.html',
  styleUrls: ['./consultar-pago.component.css']
})
export class ConsultarPagoComponent implements OnInit {
  nombrepago = new FormControl('', [Validators.required]);
  selectedYear: string;
  selectedMonth: string;
  selectedResp: string;
  displayedColumns = ['nombre', 'responsable', 'fecha', 'valor', 'mes', 'pagado', 'actions'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('divTabla') divTabla: ElementRef;

  length = 50;
  pageSize = 10;
  pageSizeOptions = [10, 20, 30];
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
    ,public fileserv:FileService
  ,public dialog:MatDialog) { }

  ngOnInit() {
  }

  onSubmitFind(event: Event) {
    event.preventDefault();
    this._pago.Mes = +this.selectedMonth;
    this._pago.Year = +this.selectedYear;
    this._pago.Responsable = this.selectedResp;
    this._pago.NombrePago = this.nombrepago.value;
    this.consultarp_service.getAll(this._pago).subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.divTabla.nativeElement.className = '';
          this.dataSource = new MatTableDataSource<PagoModel>(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.divTabla.nativeElement.className = 'matCustom';
          this.consultarp_service.openSnackBar('No se encontró Informacion', '')
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

  editTipoPago(tipopago:PagoModel,event:Event){
    this.openDialogToEditTipoPago(tipopago);
  }

  openDialogToEditTipoPago(tipopago:PagoModel){
    console.log(tipopago);
    const dialogRef = this.dialog.open(EditConsultarpagoComponent,
      {
        data:tipopago,
        height:'400px',
        width:'600px'
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
      });

  }

  downloadFile(){
    this.fileserv.downloadFile();
  }
}
