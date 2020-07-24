import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsicologoListComponent } from './psicologo-list/psicologo-list.component';
import { PsicologoDetailComponent } from './psicologo-detail/psicologo-detail.component';

const routes : Routes = [
  { path: '', component: PsicologoListComponent, pathMatch: 'full' },
  { path: ':psicologoId', component: PsicologoDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class PsicologoRoutingModule { }