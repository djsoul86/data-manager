import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Pendiente } from '../crear-pendientes/models/pendiente.model';
import { PendientesService } from '../crear-pendientes/services/pendientes.service';
import { Proyecto } from '../crear-proyectos/models/proyecto.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl, Validators } from '@angular/forms';
import { PageEvent, MatPaginator, MatSort, MatTableDataSource, Sort } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { HttpErrorResponse } from '@angular/common/http';
import { FilterUtil } from '../../utils/filter.util';
import { SnackBarUtil } from '../../utils/snackBar.util';

@Component({
  selector: 'app-consultar-pendientes',
  templateUrl: './consultar-pendientes.component.html',
  styleUrls: ['./consultar-pendientes.component.css']
})

export class ConsultarPendientesComponent implements OnInit {
  proyectos: Proyecto[];
  pendientes: Array<Pendiente>;
  displayedColumns = ['fechacreacion', 'proyecto', 'pendiente', 'requerimiento'];
  dataSource;
  selectedValue: string;
  abierto = new FormControl('', [Validators.required]);
  pendiente = new FormControl('', [Validators.required]);
  constructor(public pendientes_service: PendientesService
    ,public _pendiente: Pendiente
    ,public utils:FilterUtil
    ,public snack:SnackBarUtil) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('divTabla') divTabla: ElementRef;

  length = 50;
  pageSize = 5;
  pageSizeOptions = [5, 10, 20];
  pageEvent: PageEvent;
  sortedData;

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
  applyFilter(filterValue:string){
    this.dataSource.filter = this.utils.applyFilter(filterValue,this.dataSource);
  }

  onSubmitFind(event: Event) {
    event.preventDefault();
    this._pendiente.Proyecto = this.selectedValue;
    this._pendiente.Abierto = this.abierto.value;
    this._pendiente.Pendiente = this.pendiente.value;
    this.pendientes_service.getPendientes(this._pendiente).subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.pendientes = data;
          this.divTabla.nativeElement.className = '';
          this.dataSource = new MatTableDataSource<Pendiente>(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }else{
          this.divTabla.nativeElement.className = 'matCustom';
          this.snack.openSnackBar('No se encontró Informacion','')
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

  sortData(sort: Sort) {
    const data = this.pendientes.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }
    this.dataSource = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'fechacreacion': return this.compare(a.FechaCreacion, b.FechaCreacion, isAsc);
        case 'proyecto': return this.compare(a.Proyecto, b.Proyecto, isAsc);
        case 'pendiente': return this.compare(a.Pendiente, b.Pendiente, isAsc);
        case 'requerimiento': return this.compare(a.Requerimiento, b.Requerimiento, isAsc);
        default: return 0;
      }
    });
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
