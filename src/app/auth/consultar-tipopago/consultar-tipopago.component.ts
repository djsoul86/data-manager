import { Component, OnInit,ViewChild, Output, EventEmitter } from '@angular/core';
import { ConsultarTipopagoService } from './services/consultar-tipopago.service';
import {TipoPagoResponse} from '../consultar-tipopago/models/tipopago-response.model';
import { TipoPago } from './models/tipopago-model';
import { MatTableDataSource,MatPaginator,MatSort, MatDialog, PageEvent, Sort } from '@angular/material';
import { EditTipopagoComponent } from './edit-tipopago/edit-tipopago.component';
import { Observable } from 'rxjs/Observable';
import { FilterUtil } from '../../utils/filter.util';

@Component({
  selector: 'app-consultar-tipopago',
  templateUrl: './consultar-tipopago.component.html',
  styleUrls: ['./consultar-tipopago.component.css']
})
export class ConsultarTipopagoComponent implements OnInit {
  tipopago:Array<TipoPago>;
  displayedColumns = ['id','nombrepago','fijo','valor','promedio','actions'];
  dataSource;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  length = 50;
  pageSize = 5;
  pageSizeOptions = [5, 10, 20];
  pageEvent:PageEvent;
  sortedData;

  applyFilter(filterValue:string){
    this.dataSource.filter = this.utils.applyFilter(filterValue,this.dataSource);
  }

  setPageSizeOptions(setPageSizeOptionsInput:string){
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  constructor(public consultartipopagoservice:ConsultarTipopagoService
    ,public dialog:MatDialog,public utils:FilterUtil) { }


  editTipoPago(tipopago:TipoPago,event:Event){
    this.openDialogToEditTipoPago(tipopago);
  }

  openDialogToEditTipoPago(tipopago:TipoPago){
    const dialogRef = this.dialog.open(EditTipopagoComponent,
      {
        data:tipopago,
        height:'400px',
        width:'600px'
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
      });

  }
  sortData(sort: Sort) {
    const data = this.tipopago.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }
    this.dataSource = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'id': return this.compare(a.Id, b.Id, isAsc);
        case 'nombrepago': return this.compare(a.NombrePago, b.NombrePago, isAsc);
        case 'valor': return this.compare(a.Valor, b.Valor, isAsc);
        case 'promedio': return this.compare(a.Promedio, b.Promedio, isAsc);
        default: return 0;
      }
    });
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  refreshDataTable(tipop:Observable<any>){
    tipop.subscribe(
      (data:any) =>
    {
      this.tipopago = data;
      this.sortedData = this.tipopago.slice();
      this.dataSource = new MatTableDataSource<TipoPago>(this.tipopago);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
            
    },
    error=>{
      console.error(error);
    }
  );
  }

  deleteTipoPago(tipopago:TipoPago){
    this.refreshDataTable(this.consultartipopagoservice.delete(tipopago));
  }

  ngOnInit() {
    this.refreshDataTable(this.consultartipopagoservice.getAll());
  }

}
