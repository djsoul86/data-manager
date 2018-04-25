import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Pendiente } from '../crear-pendientes/models/pendiente.model';
import { Proyecto } from '../crear-proyectos/models/proyecto.model';
import { PendientesService } from '../crear-pendientes/services/pendientes.service';
import { MatPaginator, MatSort, PageEvent, MatTableDataSource, Sort } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Anotaciones } from '../crear-anotaciones/models/anotacion.model';
import { AnotacionesService } from './servicios/anotaciones.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FilterUtil } from '../../utils/filter.util';

@Component({
  selector: 'app-consultar-anotaciones',
  templateUrl: './consultar-anotaciones.component.html',
  styleUrls: ['./consultar-anotaciones.component.css']
})
export class ConsultarAnotacionesComponent implements OnInit {
  proyectos: Proyecto[];
  displayedColumns = ['fechacreacion', 'anotacion', 'actions'];
  dataSource;
  sortedData;
  anotaciones: Array<Anotaciones>;
  selectedValue: string;
  anotacion = new FormControl('', [Validators.required]);
  constructor(public pendientes_service: PendientesService,
    public anotacionObj: Anotaciones,public anotacion_service:AnotacionesService,public utils:FilterUtil) { }

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

  applyFilter(filterValue:string){
    this.dataSource.filter = this.utils.applyFilter(filterValue,this.dataSource);
  }

  onSubmitFind(event: Event) {
    event.preventDefault();
    this.anotacionObj.Proyecto = this.selectedValue;
    this.anotacionObj.Anotacion = this.anotacion.value;
    this.anotacion_service.getAll(this.anotacionObj).subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.anotaciones = data;
          this.divTabla.nativeElement.className = '';
          this.dataSource = new MatTableDataSource<Pendiente>(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }else{
          this.divTabla.nativeElement.className = 'matCustom';
          this.pendientes_service.openSnackBar('No se encontró Informacion','')
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
    const data = this.anotaciones.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }
    this.dataSource = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'fechacreacion': return this.compare(a.FechaCreacion, b.FechaCreacion, isAsc);
        default: return 0;
      }
    });
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  deleteAnotacion(anotacion: Anotaciones, event: Event) {
    this.anotacion_service.delete(anotacion);
  }
}
