import { NgModule } from '@angular/core';
import { PsicologoRoutingModule } from './psicologo-routing.module';

import { PsicologoListComponent } from './psicologo-list/psicologo-list.component';
import { PsicologoDetailComponent } from './psicologo-detail/psicologo-detail.component';

@NgModule({
  imports: [ PsicologoRoutingModule ],
  declarations: [ PsicologoListComponent, PsicologoDetailComponent ]
})
export class PsicologoModule { }