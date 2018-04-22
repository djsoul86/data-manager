import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Pendiente } from '../crear-pendientes/models/pendiente.model';
import { PendientesService } from '../crear-pendientes/services/pendientes.service';
import { Proyecto } from '../crear-proyectos/models/proyecto.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl, Validators } from '@angular/forms';
import { PageEvent, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-consultar-pendientes',
  templateUrl: './consultar-pendientes.component.html',
  styleUrls: ['./consultar-pendientes.component.css']
})

export class ConsultarPendientesComponent implements OnInit {
  proyectos: Proyecto[];
  displayedColumns = ['fechacreacion', 'proyecto', 'pendiente', 'requerimiento'];
  dataSource;
  selectedValue: string;
  abierto = new FormControl('', [Validators.required]);
  pendiente = new FormControl('', [Validators.required]);
  constructor(public pendientes_service: PendientesService,
    public _pendiente: Pendiente,
    public consultarp_service: PendientesService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('divTabla') divTabla: ElementRef;

  length = 50;
  pageSize = 5;
  pageSizeOptions = [5, 10, 20];
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
    this._pendiente.Proyecto = this.selectedValue;
    this._pendiente.Abierto = this.abierto.value;
    this._pendiente.Pendiente = this.pendiente.value;
    this.consultarp_service.getPendientes(this._pendiente).subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.divTabla.nativeElement.className = '';
          this.dataSource = new MatTableDataSource<Pendiente>(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }else{
          this.divTabla.nativeElement.className = 'matCustom';
          this.consultarp_service.openSnackBar('No se encontró Informacion','')
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
