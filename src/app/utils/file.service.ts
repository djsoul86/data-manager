import { Injectable } from '@angular/core';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { InterceptorService } from 'ng2-interceptors';

// import { ConfigService } from 'app/common/services/config.service';
import { getFileNameFromResponseContentDisposition, saveFile } from './file-download-helper';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileService {
    constructor(
        // private config: ConfigService,
        private http: HttpClient,
    ) {}

    downloadFile(propertyId: string, fileId: string) {
        const url = `C:\Users\Dj_So\Downloads\img\Varios\1IMG_20180421_132521588.jpg`;
        // const options = new RequestOptions({responseType: ResponseContentType.Blob });

        // Process the file downloaded
        // this.http.get(url).subscribe(res => {
        //     const fileName = getFileNameFromResponseContentDisposition(res);
        //     saveFile(res.blob(), fileName);
        // });
    }
}