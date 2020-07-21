import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public/public.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

const routes : Routes = [
    { 
      path: '',
      component: PublicComponent,
      children: [
        { path: 'home', component: BienvenidaComponent },
        { path: 'contactanos', component: ContactanosComponent }
      ]
    }    
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class PublicRoutingModule { }