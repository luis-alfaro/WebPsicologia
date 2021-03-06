import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CoreModule } from './core/core.module';

import { LayoutPublicComponent } from './route-components/layout-public/layout-public.component';
import { LayoutUserComponent } from './route-components/layout-user/layout-user.component';
import { NotFoundComponent } from './route-components/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'bienvenida' },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: LayoutPublicComponent,
    children: [
      {
        path: 'bienvenida',
        loadChildren: () => import('./modules/bienvenida/bienvenida.module').then(m => m.BienvenidaModule)
      },
      {
        path: 'contactanos',
        loadChildren: () => import('./modules/contactanos/contactanos.module').then(m => m.ContactanosModule),
        data: {preload:true}
      }
    ]
  },
  {
    path: '',
    component: LayoutUserComponent,
    children: [
      {
        path: 'usuario',
        loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule),
        data: {preload:true}
      },
      {
        path: 'paciente',
        loadChildren: () => import('./modules/paciente/paciente.module').then(m => m.PacienteModule),
        data: {preload:true}
      },
      {
        path: 'psicologo',
        loadChildren: () => import('./modules/psicologo/psicologo.module').then(m => m.PsicologoModule),
        data: {preload:true}
      }
    ]
  },
  { path: '**', component: NotFoundComponent },/*,
  {
    path: 'error',
    loadChildren: () => import('./modules/errores/errores.module').then(m => m.ErroresModule)
  },
  { path: '**', redirectTo: 'error/404' }*/
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: false }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }