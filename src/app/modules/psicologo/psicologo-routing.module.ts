import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsicologoListComponent } from './psicologo-list/psicologo-list.component';
import { PsicologoDetailComponent } from './psicologo-detail/psicologo-detail.component';

const routes : Routes = [
  /*{ 
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: BienvenidaComponent, pathMatch: 'full' },
      { path: 'contactanos', component: ContactanosComponent }
    ]
  },*/
  { path: '', component: PsicologoListComponent, pathMatch: 'full' },
  { path: 'detail', component: PsicologoDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class PsicologoRoutingModule { }