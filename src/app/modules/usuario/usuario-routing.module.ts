import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';

const routes : Routes = [
  { path: '', component: UsuarioListComponent, pathMatch: 'full' },
  { path: ':usuarioId', component: UsuarioDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class UsuarioRoutingModule { }