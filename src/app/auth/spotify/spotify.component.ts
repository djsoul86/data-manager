import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSort, MatPaginator, PageEvent, MatTableDataSource, MatDialog } from '@angular/material';
import { Spotify } from './models/spotify.model';
import { HttpErrorResponse } from '@angular/common/http';
import { SpotifyService } from './services/spotify.service';
import { SnackBarUtil } from '../../utils/snackBar.util';
import { EditSpotifyComponent } from './edit-spotify/edit-spotify.component';
import { FilterUtil } from '../../utils/filter.util';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {
  displayedColumns = ['trackname', 'artist', 'descargada', 'actions'];
  dataSource;
  sortedData;
  selectedResp: string;
  pagos: Array<Spotify>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('divTabla') divTabla: ElementRef;

  length = 50;
  pageSize = 15;
  pageSizeOptions = [15, 30, 50];
  pageEvent: PageEvent;
  playlist = [
    { Id: '1', Nombre: 'Tech House Rumba' },
    { Id: '2', Nombre: 'Tech House Intro' },
    { Id: '3', Nombre: 'Techno' },
    { Id: '4', Nombre: 'Deep House' },
    { Id: '5', Nombre: 'House' },
    { Id: '6', Nombre: 'House Relax' }
  ];

  applyFilter(filterValue: string) {
    this.utils.applyFilter(filterValue, this.dataSource);
  }

  constructor(public spoty_serv: SpotifyService
    , public spot: Spotify
    , public snack: SnackBarUtil
    , public dialog: MatDialog
    , public utils: FilterUtil) { }

  ngOnInit() {
  }

  
  onSubmitFind(event: Event) {
    if (event != null) {
      event.preventDefault();
    }
    this.spot.PlayList = this.selectedResp;

    this.spoty_serv.getAll(this.spot).subscribe(
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

  openDialogToEditMusic(spot: Spotify) {
    console.log(spot);
    const dialogRef = this.dialog.open(EditSpotifyComponent,
      {
        data: spot,
        height: '400px',
        width: '400px'
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });

  }

  refreshDataTable(data: any) {
    if (data != undefined && data.length > 0) {
      this.pagos = data;
      this.sortedData = this.pagos.slice();
      this.divTabla.nativeElement.className = '';
      this.dataSource = new MatTableDataSource<Spotify>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } else {
      this.divTabla.nativeElement.className = 'matCustom';
      this.snack.openSnackBar('No se encontró Informacion', '')
    }
  }


}
