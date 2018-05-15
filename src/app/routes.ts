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
import { CargararchivosComponent } from './auth/cargararchivos/cargararchivos.component';
import { AuthGuard } from './common/guards/auth.guard';
import { PublicGuard } from  './common/guards/public.guard';
import { LoginComponent } from './public/login/login.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [ PublicGuard ] },
    { path: 'mantenimiento', component: MantenimientoComponent,pathMatch:'full',canActivate:[AuthGuard] },
    { path: 'pendientes', component: PendientesComponent,pathMatch:'full',canActivate:[AuthGuard] },
    { path: 'pass', component: PassComponent,pathMatch:'full',canActivate:[AuthGuard] },
    { path: 'anotaciones', component: AnotacionesComponent,pathMatch:'full',canActivate:[AuthGuard] },
    { path: 'financiero', component: FinancieroComponent,pathMatch:'full',canActivate:[AuthGuard] },
    { path: 'presupuestos', component: PresupuestosComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'home', component: HomeComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'crear-tipopago', component: CrearTipopagoComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'crear-proyectos', component: CrearProyectosComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'consultar-tipopago', component: ConsultarTipopagoComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'crear-ingreso', component: CrearIngresoComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'crear-tipopresupuesto', component: CrearTipopresupuestoComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'crear-pendientes', component: CrearPendientesComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'consultar-pendientes', component: ConsultarPendientesComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'consultar-anotaciones', component: ConsultarAnotacionesComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'crear-anotaciones', component: CrearAnotacionesComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'crear-pass', component: CrearPassComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'consultar-pass', component: ConsultarPassComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'consultar-pago', component: ConsultarPagoComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'crear-pago', component: CrearPagoComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'ver-consumotarjetas', component: VerConsumotarjetasComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'crear-presupuestos', component: CrearPresupuestosComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'consultar-presupuestos', component: ConsultarPresupuestosComponent, pathMatch: 'full',canActivate:[AuthGuard] },
    { path: 'cargararchivos', component: CargararchivosComponent, pathMatch: 'full',canActivate:[AuthGuard] }
];

