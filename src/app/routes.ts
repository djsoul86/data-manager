import { Routes } from '@angular/router';
import { MantenimientoComponent } from './auth/mantenimiento/mantenimiento.component';
import { HomeComponent } from './auth/home/home.component';
import { CrearTipopagoComponent } from './auth/crear-tipopago/crear-tipopago.component';
import { ConsultarTipopagoComponent } from './auth/consultar-tipopago/consultar-tipopago.component';
import { CrearProyectosComponent } from './auth/crear-proyectos/crear-proyectos.component';

export const routes: Routes = [
    {
      path: '', pathMatch: 'full', redirectTo: '/home'
    },
    {
      path: 'mantenimiento', component: MantenimientoComponent
    },
    {
        path: 'home', component: HomeComponent, pathMatch: 'full'
    },
    {
        path: 'crear-tipopago', component: CrearTipopagoComponent, pathMatch: 'full'
    },
    {
      path: 'crear-proyectos', component: CrearProyectosComponent, pathMatch: 'full'
    },
    {
      path: 'consultar-tipopago', component: ConsultarTipopagoComponent, pathMatch: 'full'
    }
   ];

