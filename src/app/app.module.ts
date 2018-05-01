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
import {MatChipsModule} from '@angular/material/chips';
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
  ,MatSelectModule,
  MAT_SNACK_BAR_DATA,
  MatExpansionModule} from '@angular/material';
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
import { Anotaciones } from './auth/crear-anotaciones/models/anotacion.model';
import { CrearanotacionesService } from './auth/crear-anotaciones/services/crearanotaciones.service';
import { ConsultarpendientesService } from './auth/consultar-pendientes/services/consultarpendientes.service';
import { AnotacionesService } from './auth/consultar-anotaciones/servicios/anotaciones.service';
import { CrearPassComponent } from './auth/crear-pass/crear-pass.component';
import { ConsultarPassComponent } from './auth/consultar-pass/consultar-pass.component';
import { PassComponent } from './auth/pass/pass.component';
import { CrearPassService } from './auth/crear-pass/services/crear-pass.service';
import { PassModel } from './auth/crear-pass/models/pass.model';
import { ConsultarPassService } from './auth/consultar-pass/services/consultar-pass.service';
import { FinancieroComponent } from './auth/financiero/financiero.component';
import { CrearPagoComponent } from './auth/crear-pago/crear-pago.component';
import { ConsultarPagoComponent } from './auth/consultar-pago/consultar-pago.component';
import { VerConsumotarjetasComponent } from './auth/ver-consumotarjetas/ver-consumotarjetas.component';
import { PresupuestosComponent } from './auth/presupuestos/presupuestos.component';
import { CrearPresupuestosComponent } from './auth/crear-presupuestos/crear-presupuestos.component';
import { ConsultarPresupuestosComponent } from './auth/consultar-presupuestos/consultar-presupuestos.component';
import { PagoModel } from './auth/crear-pago/models/pago.model';
import { CrearpagoService } from './auth/crear-pago/services/crearpago.service';
import { DateFormatPipe } from './auth/pipes/DateFormatPipe';
import { ConsultarpagoService } from './auth/consultar-pago/services/consultarpago.service';
import { EditConsultarpagoComponent } from './auth/consultar-pago/edit-consultarpago/edit-consultarpago.component';
import { FileService } from './utils/file.service';
import { InterceptorService } from 'ng2-interceptors';
import { TCredito } from './auth/ver-consumotarjetas/models/Tcredito.model';
import { ConsumotcService } from './auth/ver-consumotarjetas/services/consumotc.service';
import { FilterUtil } from './utils/filter.util';
import { SnackBarUtil } from './utils/snackBar.util';
import { AppSettings } from './config/AppSettings';
import { AppSettingServiceService } from './config/app-setting-service.service';
import { CargararchivosComponent } from './auth/cargararchivos/cargararchivos.component';
import { ServiceService } from './auth/cargararchivos/services/service.service';
import { PresupuestoModel } from './auth/crear-presupuestos/models/presupuesto.model';


@NgModule({
  declarations: [
    DateFormatPipe,
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
    ConsultarAnotacionesComponent,
    CrearPassComponent,
    ConsultarPassComponent,
    PassComponent,
    FinancieroComponent,
    CrearPagoComponent,
    ConsultarPagoComponent,
    VerConsumotarjetasComponent,
    PresupuestosComponent,
    CrearPresupuestosComponent,
    ConsultarPresupuestosComponent,
    EditConsultarpagoComponent,
    CargararchivosComponent
  ],
  entryComponents:[
    EditTipopagoComponent,
    EditConsultarpagoComponent
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
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatListModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSelectModule,
    MatChipsModule,
    MatExpansionModule
    
  ],
  providers: [
    ConsultarTipopagoService,
    ProyectoService,
    CrearingresoService,
    CreartipoprespuestoService,
    PendientesService,
    CrearanotacionesService,
    CrearPassService,
    CrearpagoService,
    ConsultarPassService,
    ConsultarpendientesService,
    AnotacionesService,
    ConsultarpagoService,
    ConsumotcService,
    AppSettingServiceService,
    ServiceService,
    FileService,
    TipoPago,
    Proyecto,
    Ingreso,
    Pendiente,
    Anotaciones,
    PagoModel,
    TiposPresupuesto,
    PassModel,
    TCredito,
    SnackBarUtil,
    PresupuestoModel,
    // SnackBarUtil,
    AppSettings,
    FilterUtil,
    {provide: MAT_SNACK_BAR_DATA,useValue:''},
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
