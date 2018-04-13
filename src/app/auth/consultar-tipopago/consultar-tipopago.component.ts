import { Component, OnInit,ViewChild } from '@angular/core';
import { ConsultarTipopagoService } from './services/consultar-tipopago.service';
import {TipoPagoResponse} from '../consultar-tipopago/models/tipopago-response.model';
import { TipoPago } from './models/tipopago-model';
import { MatTableDataSource,MatPaginator,MatSort, MatDialog, PageEvent } from '@angular/material';

@Component({
  selector: 'app-consultar-tipopago',
  templateUrl: './consultar-tipopago.component.html',
  styleUrls: ['./consultar-tipopago.component.css']
})
export class ConsultarTipopagoComponent implements OnInit {
  tipopago:Array<TipoPago>;
  displayedColumns = ['id','nombrepago','fijo','valor','promedio'];
  dataSource;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  length = 50;
  pageSize = 5;
  pageSizeOptions = [5, 10, 20];
  pageEvent:PageEvent;
  
  applyFilter(filterValue:string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

  setPageSizeOptions(setPageSizeOptionsInput:string){
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  constructor(public consultartipopagoservice:ConsultarTipopagoService) { }

  ngOnInit() {
    this.consultartipopagoservice.getAll().subscribe(
      (data:any) =>
    {
      this.tipopago = data;
      this.dataSource = new MatTableDataSource<TipoPago>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
      console.log(data.tipopago);
      console.log(this.tipopago);
    },
    error=>{
      console.error(error);
    }
  );
  }

}
