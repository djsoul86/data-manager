import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service';
import { AppSettings } from '../../config/AppSettings';
import { AppSettingServiceService } from '../../config/app-setting-service.service';

@Injectable()
export class AuthGuard implements CanActivate {
  isDevelopment: boolean;
  private settings: AppSettings;
  constructor(public _authenticationService: AuthenticationService,
    public router: Router
    , public appSettingsService: AppSettingServiceService) {
    this.appSettingsService.getSettings().subscribe(settings => this.settings = settings,
      () => null,
      () => {
        this.isDevelopment = this.settings.isDevelopment;
      });
  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._authenticationService.isLoggedIn()) {
      return true;
    }
    if (!this.isDevelopment) {
      this.router.navigate(['/login']);
    }
    return this.isDevelopment;
  }
}