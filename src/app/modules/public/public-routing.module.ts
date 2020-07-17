import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

const routes : Routes = [
    { path: '', component: BienvenidaComponent },
    { path: 'contactanos', component: ContactanosComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class PublicRoutingModule { }