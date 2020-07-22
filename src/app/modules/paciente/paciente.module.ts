import { NgModule } from '@angular/core';
import { PacienteRoutingModule } from './paciente-routing.module';

import { PacienteListComponent } from './paciente-list/paciente-list.component';

@NgModule({
  imports: [ PacienteRoutingModule ],
  declarations: [ PacienteListComponent ]
})
export class PacienteModule { }