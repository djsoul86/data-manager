import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, PageEvent, MatTableDataSource } from '@angular/material';
import { PendientesService } from '../crear-pendientes/services/pendientes.service';
import { Proyecto } from '../crear-proyectos/models/proyecto.model';
import { FormControl, Validators } from '@angular/forms';
import { PassModel } from '../crear-pass/models/pass.model';
import { ConsultarPassService } from './services/consultar-pass.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackBarUtil } from '../../utils/snackBar.util';

@Component({
  selector: 'app-consultar-pass',
  templateUrl: './consultar-pass.component.html',
  styleUrls: ['./consultar-pass.component.css']
})
export class ConsultarPassComponent implements OnInit {
  proyectos: Proyecto[];
  displayedColumns = ['proyecto', 'key', 'descripcion', 'value', 'actions'];
  dataSource;
  selectedValue: string;
  key = new FormControl('', [Validators.required]);
  descripcion = new FormControl('', [Validators.required]);
  constructor(public pendientes_service: PendientesService
    , public _pass: PassModel
    , public consultarp_service: ConsultarPassService
    , public snack:SnackBarUtil) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('divTabla') divTabla: ElementRef;

  length = 50;
  pageSize = 10;
  pageSizeOptions = [10, 20, 30];
  pageEvent: PageEvent;

  ngOnInit() {
    this.pendientes_service.getAll().subscribe(
      (data: any) => {
        this.proyectos = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  onSubmitFind(event: Event) {
    event.preventDefault();
    this._pass.Proyecto = this.selectedValue;
    this._pass.Key = this.key.value;
    // this._pass.Value = this..value;
    this._pass.Descripcion = this.descripcion.value;
    this.consultarp_service.getAll(this._pass).subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.divTabla.nativeElement.className = '';
          this.dataSource = new MatTableDataSource<PassModel>(data);
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
}
