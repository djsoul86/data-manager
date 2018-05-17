import { Injectable } from '@angular/core';
import { Spotify } from '../models/spotify.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../../config/AppSettings';
import { AppSettingServiceService } from '../../../config/app-setting-service.service';


@Injectable()
export class SpotifyService {

  apiURL:string;
  private settings: AppSettings;
  constructor(public http:HttpClient
    ,public appSettingsService:AppSettingServiceService) { 
    this.appSettingsService.getSettings().subscribe(settings=> this.settings = settings,
      () => null,
      () => {
        this.apiURL = this.settings.defaultUrl;
      });
  }

  getAll(spot: Spotify): Observable<any> {
    const url = `${this.apiURL}/api/Spotify/${spot}`;
    return this.http.post<Spotify>(url, spot);
  };

  update(music: Spotify, archivo: File): any {
    const url = `${this.apiURL}/api/Spotify/guardarMusica`;
    const formData: FormData = new FormData();
    if (archivo != null) {
      formData.append('File', archivo, archivo.name);
    }
    formData.append('TrackName', music.TrackName);
    formData.append('Artist', music.Artist);
    formData.append('Descargada', music.Descargada.toString());
    formData.append('Actualizar', 'true');
    formData.append('PlayList', music.PlayList);
    return this.http.put(url, formData);
  }


}
