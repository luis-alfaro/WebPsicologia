import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './route-components/login/login.component';
import { NotFoundComponent } from './route-components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'paciente',
    loadChildren: () => import('./modules/paciente/paciente.module').then(m => m.PacienteModule)
  },
  {
    path: 'psicologo',
    loadChildren: () => import('./modules/psicologo/psicologo.module').then(m => m.PacienteModule)
  },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },/*,
  {
    path: 'error',
    loadChildren: () => import('./modules/errores/errores.module').then(m => m.ErroresModule)
  },
  { path: '**', redirectTo: 'error/404' }*/
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }