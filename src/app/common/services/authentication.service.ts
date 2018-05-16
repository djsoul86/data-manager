import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';
import { AppSettingServiceService } from '../../config/app-setting-service.service';
import { AppSettings } from '../../config/AppSettings';
import { Users } from '../models/Users';

@Injectable()
export class AuthenticationService  {
  hasSession = false;
  user;
  apiURL:string;
  settings:AppSettings;
  constructor (public _http: HttpClient, public _locker: SessionStorageService
    ,public appSettingsService:AppSettingServiceService
    ,public users:Users) { 
    this.appSettingsService.getSettings().subscribe(settings=> this.settings = settings,
      () => null,
      () => {
        this.apiURL = this.settings.defaultUrl;
      });
    }

  public isLoggedIn () {
    console.log('loggeado');
    const user = this._locker.retrieve('user');
    if ( !!user ) {
      this.user = user;
      this.hasSession = true;
    }
    return this.hasSession;
  }

  public logIn (username: string, password: string) {
    const url = `${this.apiURL}/api/Login`;
    this.users.Email = username;
    this.users.password = password;
    return this._http.post(url,this.users);
  }

  public logout () {
    this.user = null;
    this.hasSession = false;
    this._locker.clear('user');
  }

}
