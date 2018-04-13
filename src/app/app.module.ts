import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {routes} from './routes';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { MantenimientoComponent } from './auth/mantenimiento/mantenimiento.component';
import { HomeComponent } from './auth/home/home.component';
import {ConsultarTipopagoService} from './auth/consultar-tipopago/services/consultar-tipopago.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Models
import { TipoPagoResponse } from './auth/consultar-tipopago/models/tipopago-response.model';



//Material
import { CrearTipopagoComponent } from './auth/crear-tipopago/crear-tipopago.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_CHECKBOX_CLICK_ACTION
  ,MatButtonModule
  ,MatInputModule
  ,MatTableModule
  ,MatMenuModule
  ,MatPaginatorModule
  ,MatSortModule
  ,MatIconModule
  ,MatDialogModule
  ,MatPaginatorIntl
  ,MatListModule
  ,MatCheckboxModule } from '@angular/material';
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
    HttpClientModule,
    //Material
    MatInputModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatCheckboxModule
  ],
  providers: [
    ConsultarTipopagoService,
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
