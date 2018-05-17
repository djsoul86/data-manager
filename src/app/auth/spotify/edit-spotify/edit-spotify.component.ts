import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SnackBarUtil } from '../../../utils/snackBar.util';
import { ConsultarpagoService } from '../../consultar-pago/services/consultarpago.service';
import { Spotify } from '../models/spotify.model';
import { HttpErrorResponse } from '@angular/common/http';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-edit-spotify',
  templateUrl: './edit-spotify.component.html',
  styleUrls: ['./edit-spotify.component.css']
})
export class EditSpotifyComponent implements OnInit {
  playlist = new FormControl('', [Validators.required])
  descargada = new FormControl('', [Validators.required])
  trackname = new FormControl('', [Validators.required])
  artist = new FormControl('', [Validators.required])
  fileToUpload: File = null;

  constructor(public dialogRef: MatDialogRef<EditSpotifyComponent>
    , public spot_service: SpotifyService
    , public snack: SnackBarUtil
    , @Inject(MAT_DIALOG_DATA) public spot: Spotify) {
      this.artist.disable();
      this.trackname.disable();
  }

  ngOnInit() {
  }
  onSubmit(event: Event) {
    event.preventDefault();

    this.spot.PlayList = this.playlist.value;
    this.spot.Descargada = this.descargada.value;
    this.spot_service.update(this.spot, this.fileToUpload).subscribe(
      (data: Spotify) => {
        this.snack.openSnackBar('Se actualizó canción', '')
        this.dialogRef.close();
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          this.snack.openSnackBar('Error actualizando err.error.message','')
          console.log('Un error ha ocurrido', err.error.message);
        } else {
          this.snack.openSnackBar(`Backend ha regresado un error ${err.status}, body fue ${err.error}`,'')
          console.log(`Backend ha regresado un error ${err.status}, body fue ${err.error}`);
        }
      },
      () => {
        console.log('Todo ha terminado...')
      }
    );



  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}
