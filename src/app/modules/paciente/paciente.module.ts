import { NgModule, Optional, SkipSelf } from '@angular/core';
import { PacienteRoutingModule } from './paciente-routing.module';

import { PacienteListComponent } from './paciente-list/paciente-list.component';

@NgModule({
  imports: [ PacienteRoutingModule ],
  declarations: [ PacienteListComponent ]
})
export class PacienteModule {
  constructor (@Optional() @SkipSelf() parentModule?: PacienteModule) {
    if (parentModule) throw new Error('PacienteModule is already loaded. Import it in the AppModule only');
  }
}