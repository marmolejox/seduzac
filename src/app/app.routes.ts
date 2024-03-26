import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { DocentesComponent } from './docentes/docentes.component';
import { AplicacionesComponent } from './aplicaciones/aplicaciones.component';

export const routes: Routes = [
    { path: '', component:HomeComponent },
    { path: 'alumnos', component: AlumnosComponent },
    {path: 'docentes', component: DocentesComponent},
    {path: 'aplicaciones', component: AplicacionesComponent}

];
