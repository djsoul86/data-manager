import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TiposPresupuesto } from '../crear-tipopresupuesto/models/tipopresupuesto.model';
import { Validators, FormControl } from '@angular/forms';
import { PresupuestoService } from './services/presupuesto.service';
import { CreartipoprespuestoService } from '../crear-tipopresupuesto/services/creartipoprespuesto.service';
import { PresupuestoModel } from './models/presupuesto.model';
import { MatPaginator, MatSort, PageEvent, MatTableDataSource } from '@angular/material';
import { SnackBarUtil } from '../../utils/snackBar.util';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crear-presupuestos',
  templateUrl: './crear-presupuestos.component.html',
  styleUrls: ['./crear-presupuestos.component.css']
})
export class CrearPresupuestosComponent implements OnInit {
  tipospresup: TiposPresupuesto[];
  valor = new FormControl('', Validators.required);
  nombre = new FormControl('', Validators.required);
  pagos: Array<PresupuestoModel>;
  selectedValue: string;
  displayedColumns = ['nombre', 'rubro', 'valor', 'actions'];
  dataSource;
  sortedData;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('divTabla') divTabla: ElementRef;
  @ViewChild('btnReset') bntid: ElementRef;
  @ViewChild('btnSubmit') bntSub: ElementRef;
  isExtendedRow = (index, item) => item.extend;
  length = 50;
  pageSize = 15;
  pageSizeOptions = [15, 30, 50];
  pageEvent: PageEvent;
  constructor(public presup_service: CreartipoprespuestoService
    , public presupuesto: PresupuestoModel
    , public snack: SnackBarUtil) { }

  ngOnInit() {
    this.presup_service.getAll().subscribe(
      (data: any) => {
        this.tipospresup = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  onSubmitCreate(event: Event) {
    event.preventDefault();
    this.presupuesto.NombreRubro = this.nombre.value;
    this.presupuesto.NombrePresupuesto = this.selectedValue;
    this.presupuesto.Valor = this.valor.value;
    if (event.type == "submit") {
      this.presupuesto.Id = -1;
    } else {
      this.presupuesto.Id = 0;
    }
    this.presup_service.crearPresupuesto(this.presupuesto).subscribe(
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

  eliminarPresupuesto(tipopago: PresupuestoModel, event: Event) {
    this.presupuesto.NombreRubro = this.nombre.value;
    this.presupuesto.NombrePresupuesto = this.selectedValue;
    this.presupuesto.Valor = this.valor.value;
    this.refreshDataTable(this.presup_service.eliminarPresupuesto(tipopago).subscribe(
      (data: Array<PresupuestoModel>) => {
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

  refreshDataTable(data: any) {
    if (data.length > 0) {
      this.pagos = data;
      this.sortedData = this.pagos.slice();
      this.setTotales(data, data);
      this.divTabla.nativeElement.className = '';
      this.dataSource = new MatTableDataSource<PresupuestoModel>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } else {
      this.divTabla.nativeElement.className = 'matCustom';
      this.snack.openSnackBar('No se encontró Informacion', '')
    }
  }

  setTotales(data: Array<PresupuestoModel>, value: number) {
    var rowTotal = new PresupuestoModel();
    var total = 0;
    var count = 0;
    rowTotal.NombrePresupuesto = 'Total';
    rowTotal.extend = true;

    for (var v in data) {
      total = total + data[count].Valor;
      count++;
    }
    rowTotal.Valor = total;
    data.push(rowTotal);
  }
}
