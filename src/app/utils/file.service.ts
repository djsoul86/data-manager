import { Injectable } from '@angular/core';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { InterceptorService } from 'ng2-interceptors';
import 'rxjs/Rx';

// import { ConfigService } from 'app/common/services/config.service';
import { getFileNameFromResponseContentDisposition, saveFile } from './file-download-helper';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PagoModel } from '../auth/crear-pago/models/pago.model';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class FileService {
  constructor(
    // private config: ConfigService,
    private http: HttpClient,
    public snackBar: MatSnackBar
  ) { }

  downloadFile(tipopago: PagoModel) {
    if (tipopago.FileName != null) {
      var splitted = tipopago.FileName.split("\\");
      return this.http
        .get('http://localhost:49800/api/ApiFinanciero/obtenerImagen', {
          responseType: "blob",
          params: new HttpParams().set('file', tipopago.FileName)
        })
        .map(res => {
          return {
            filename: splitted[splitted.length - 1],
            data: res
          };
        })
        .subscribe(res => {
          console.log('start download:', res);
          var url = window.URL.createObjectURL(res.data);
          var a = document.createElement('a');
          document.body.appendChild(a);
          a.setAttribute('style', 'display: none');
          a.href = url;
          a.download = res.filename;
          a.click();
          window.URL.revokeObjectURL(url);
          a.remove(); // remove the element
        }, error => {
          console.log('download error:', JSON.stringify(error));
        }, () => {
          console.log('Completed file download.')
        });
    } else {
      this.openSnackBar('No se encontró Archivo', '');
    }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}