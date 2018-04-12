import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {routes} from './routes';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { MantenimientoComponent } from './auth/mantenimiento/mantenimiento.component';
import { HomeComponent } from './auth/home/home.component';
import { MAT_CHECKBOX_CLICK_ACTION }  from '@angular/material';

//Material
import { CrearTipopagoComponent } from './auth/crear-tipopago/crear-tipopago.component';
import { MatInputModule,MatListModule,MatIconModule,MatCheckboxModule,MatButtonModule } from '@angular/material';
import { ConsultarTipopagoComponent } from './auth/consultar-tipopago/consultar-tipopago.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MantenimientoComponent,
    HomeComponent,
    CrearTipopagoComponent,
    ConsultarTipopagoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    //Material
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
