import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Pendiente } from '../crear-pendientes/models/pendiente.model';
import { Proyecto } from '../crear-proyectos/models/proyecto.model';
import { PendientesService } from '../crear-pendientes/services/pendientes.service';
import { MatPaginator, MatSort, PageEvent, MatTableDataSource } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Anotaciones } from '../crear-anotaciones/models/anotacion.model';
import { AnotacionesService } from './servicios/anotaciones.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-consultar-anotaciones',
  templateUrl: './consultar-anotaciones.component.html',
  styleUrls: ['./consultar-anotaciones.component.css']
})
export class ConsultarAnotacionesComponent implements OnInit {
  proyectos: Proyecto[];
  displayedColumns = ['fechacreacion', 'anotacion', 'actions'];
  dataSource;
  selectedValue: string;
  anotacion = new FormControl('', [Validators.required]);
  constructor(public pendientes_service: PendientesService,
    public anotacionObj: Anotaciones,public anotacion_service:AnotacionesService) { }

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
    this.anotacionObj.Proyecto = this.selectedValue;
    this.anotacionObj.Anotacion = this.anotacion.value;
    this.anotacion_service.getAll(this.anotacionObj).subscribe(
      (data: any) => {
        if (data.length > 0) {
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

}
