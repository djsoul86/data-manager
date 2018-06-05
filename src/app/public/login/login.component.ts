import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../common/services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('',[Validators.required])
  password = new FormControl('',[Validators.required])
  hidePassword = true;
  constructor(public authService:AuthenticationService
    ,public locker:SessionStorageService
    ,public router:Router) { 


  }

  getErrorMessageForUsername(){
    const hasError = this.username.hasError('required');
    return hasError ? 'Nombre de usuario es requerido' : '';
  }

  getErrorMessageForPassword(){
    const hasError = this.password.hasError('required');
    return hasError ? 'Contraseña es requerido' : '';
  }

  ngOnInit() {
  }

  onSubmit(Event){
    event.preventDefault();
    this.authService.logIn(this.username.value,this.password.value).subscribe(
      (data: any) => {
        this.authService.user = data;
        this.locker.store('user',data);
        this.router.navigate(['/home']);
        console.log(data);
      },(error:HttpErrorResponse)=>{
        if(error.status == 406){
          console.error('Unable to login');
          // this.openDialogWithError();
        }else{
          console.error(error.error);
          this.authService.hasSession = false;
        }
      }
    );;
  }

}
