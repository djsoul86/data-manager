import { Routes } from '@angular/router';
import { MantenimientoComponent } from './auth/mantenimiento/mantenimiento.component';
import { HomeComponent } from './auth/home/home.component';
import { CrearTipopagoComponent } from './auth/crear-tipopago/crear-tipopago.component';
import { ConsultarTipopagoComponent } from './auth/consultar-tipopago/consultar-tipopago.component';
import { CrearProyectosComponent } from './auth/crear-proyectos/crear-proyectos.component';
import { CrearIngresoComponent } from './auth/crear-ingreso/crear-ingreso.component';
import { CrearTipopresupuestoComponent } from './auth/crear-tipopresupuesto/crear-tipopresupuesto.component';
import { PendientesComponent } from './auth/pendientes/pendientes.component';
import { CrearPendientesComponent } from './auth/crear-pendientes/crear-pendientes.component';
import { ConsultarPendientesComponent } from './auth/consultar-pendientes/consultar-pendientes.component';
import { AnotacionesComponent } from './auth/anotaciones/anotaciones.component';
import { ConsultarAnotacionesComponent } from './auth/consultar-anotaciones/consultar-anotaciones.component';
import { CrearAnotacionesComponent } from './auth/crear-anotaciones/crear-anotaciones.component';
import { CrearPassComponent } from './auth/crear-pass/crear-pass.component';
import { ConsultarPassComponent } from './auth/consultar-pass/consultar-pass.component';
import { PassComponent } from './auth/pass/pass.component';
import { FinancieroComponent } from './auth/financiero/financiero.component';
import { ConsultarPagoComponent } from './auth/consultar-pago/consultar-pago.component';
import { CrearPagoComponent } from './auth/crear-pago/crear-pago.component';
import { VerConsumotarjetasComponent } from './auth/ver-consumotarjetas/ver-consumotarjetas.component';
import { PresupuestosComponent } from './auth/presupuestos/presupuestos.component';
import { CrearPresupuestosComponent } from './auth/crear-presupuestos/crear-presupuestos.component';
import { ConsultarPresupuestosComponent } from './auth/consultar-presupuestos/consultar-presupuestos.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'mantenimiento', component: MantenimientoComponent },
    { path: 'pendientes', component: PendientesComponent },
    { path: 'pass', component: PassComponent },
    { path: 'anotaciones', component: AnotacionesComponent },
    { path: 'financiero', component: FinancieroComponent },
    { path: 'presupuestos', component: PresupuestosComponent, pathMatch: 'full'},
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'crear-tipopago', component: CrearTipopagoComponent, pathMatch: 'full' },
    { path: 'crear-proyectos', component: CrearProyectosComponent, pathMatch: 'full' },
    { path: 'consultar-tipopago', component: ConsultarTipopagoComponent, pathMatch: 'full'},
    { path: 'crear-ingreso', component: CrearIngresoComponent, pathMatch: 'full' },
    { path: 'crear-tipopresupuesto', component: CrearTipopresupuestoComponent, pathMatch: 'full'},
    { path: 'crear-pendientes', component: CrearPendientesComponent, pathMatch: 'full'},
    { path: 'consultar-pendientes', component: ConsultarPendientesComponent, pathMatch: 'full'},
    { path: 'consultar-anotaciones', component: ConsultarAnotacionesComponent, pathMatch: 'full'},
    { path: 'crear-anotaciones', component: CrearAnotacionesComponent, pathMatch: 'full'},
    { path: 'crear-pass', component: CrearPassComponent, pathMatch: 'full'},
    { path: 'consultar-pass', component: ConsultarPassComponent, pathMatch: 'full'},
    { path: 'consultar-pago', component: ConsultarPagoComponent, pathMatch: 'full'},
    { path: 'crear-pago', component: CrearPagoComponent, pathMatch: 'full'},
    { path: 'ver-consumotarjetas', component: VerConsumotarjetasComponent, pathMatch: 'full'},
    { path: 'crear-presupuestos', component: CrearPresupuestosComponent, pathMatch: 'full'},
    { path: 'consultar-presupuestos', component: ConsultarPresupuestosComponent, pathMatch: 'full'}
   ];

