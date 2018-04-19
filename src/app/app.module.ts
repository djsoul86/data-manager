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
  ,MatCheckboxModule
  ,MatSnackBarModule
  ,MatSelectModule} from '@angular/material';
import { ConsultarTipopagoComponent } from './auth/consultar-tipopago/consultar-tipopago.component';
import { EditTipopagoComponent } from './auth/consultar-tipopago/edit-tipopago/edit-tipopago.component';
import { TipoPago } from './auth/consultar-tipopago/models/tipopago-model';
import { CrearProyectosComponent } from './auth/crear-proyectos/crear-proyectos.component';
import { ProyectoService } from './auth/crear-proyectos/services/proyecto.service';
import { Proyecto } from './auth/crear-proyectos/models/proyecto.model';
import { CrearIngresoComponent } from './auth/crear-ingreso/crear-ingreso.component';
import { Ingreso } from './auth/crear-ingreso/models/ingreso.model';
import { CrearingresoService } from './auth/crear-ingreso/services/crearingreso.service';
import { CrearTipopresupuestoComponent } from './auth/crear-tipopresupuesto/crear-tipopresupuesto.component';
import { TiposPresupuesto } from './auth/crear-tipopresupuesto/models/tipopresupuesto.model';
import { CreartipoprespuestoService } from './auth/crear-tipopresupuesto/services/creartipoprespuesto.service';
import { PendientesComponent } from './auth/pendientes/pendientes.component';
import { CrearPendientesComponent } from './auth/crear-pendientes/crear-pendientes.component';
import { Pendiente } from './auth/crear-pendientes/models/pendiente.model';
import { PendientesService } from './auth/crear-pendientes/services/pendientes.service';
import { ConsultarPendientesComponent } from './auth/consultar-pendientes/consultar-pendientes.component';
import { AnotacionesComponent } from './auth/anotaciones/anotaciones.component';
import { CrearAnotacionesComponent } from './auth/crear-anotaciones/crear-anotaciones.component';
import { ConsultarAnotacionesComponent } from './auth/consultar-anotaciones/consultar-anotaciones.component';
import { Anotacion } from './auth/crear-anotaciones/models/anotacion.model';
import { CrearanotacionesService } from './auth/crear-anotaciones/services/crearanotaciones.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MantenimientoComponent,
    HomeComponent,
    CrearTipopagoComponent,
    ConsultarTipopagoComponent,
    EditTipopagoComponent,
    CrearProyectosComponent,
    CrearIngresoComponent,
    CrearTipopresupuestoComponent,
    PendientesComponent,
    CrearPendientesComponent,
    ConsultarPendientesComponent,
    AnotacionesComponent,
    CrearAnotacionesComponent,
    ConsultarAnotacionesComponent
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
    MatCheckboxModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [
    ConsultarTipopagoService,
    ProyectoService,
    CrearingresoService,
    CreartipoprespuestoService,
    PendientesService,
    CrearanotacionesService,
    TipoPago,
    Proyecto,
    Ingreso,
    Pendiente,
    Anotacion,
    TiposPresupuesto,
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
