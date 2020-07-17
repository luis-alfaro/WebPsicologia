import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CoreModule } from './core/core.module';
//import { PublicModule } from './modules/public/public.module';
import { LoginComponent } from './login/login.component';
//import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule)
  },
  {
    path: '**',
    component: LoginComponent
  }
  /*{
    path: '**',
    redirectTo: ''
  }*/
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }