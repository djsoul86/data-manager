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
import { EditTipopagoComponent } from './auth/consultar-tipopago/edit-tipopago/edit-tipopago.component';
import { TipoPago } from './auth/consultar-tipopago/models/tipopago-model';
import { CrearProyectosComponent } from './auth/crear-proyectos/crear-proyectos.component';
import { ProyectoService } from './auth/crear-proyectos/services/proyecto.service';
import { Proyecto } from './auth/crear-proyectos/models/proyecto.model';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MantenimientoComponent,
    HomeComponent,
    CrearTipopagoComponent,
    ConsultarTipopagoComponent,
    EditTipopagoComponent,
    CrearProyectosComponent
  ],
  entryComponents:[
    EditTipopagoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
    ProyectoService,
    TipoPago,
    Proyecto,
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
