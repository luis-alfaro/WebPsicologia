import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
//import { PublicModule } from './modules/public/public.module';
//import { LoginComponent } from './login/login.component';
//import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./modules/errores/errores.module').then(m => m.ErroresModule)
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }