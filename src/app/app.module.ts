import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PublicModule } from './modules/public/public.module';
//import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  {
    path: 'public/*',
    loadChildren: './modules/home.module#HomeModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports:      [ 
    BrowserModule,
    CoreModule,
    PublicModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
