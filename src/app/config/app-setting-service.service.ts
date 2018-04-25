import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './AppSettings';

@Injectable()
export class AppSettingServiceService {
  getSettings(): Observable<AppSettings> {
    let settings = new AppSettings();
    return Observable.of<AppSettings>(settings);
  }
}