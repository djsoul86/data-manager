import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../common/services/authentication.service';
import { SnackBarUtil } from '../../utils/snackBar.util';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public injector: Injector, public snack:SnackBarUtil) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService = this.injector.get(AuthenticationService)
    const token = authService.user ? authService.user.ApiToken: '';
    if(token == undefined || token == null){
      this.snack.openSnackBar('Error de Autenticacion','');
    }
    request = request.clone({
      setHeaders: {
        'Api-Token': token,
        'Authorization': `User ${token}`,
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
    return next.handle(request);
  }


}
