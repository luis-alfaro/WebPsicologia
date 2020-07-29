import { NgModule, Optional, SkipSelf } from '@angular/core';
import { PsicologoRoutingModule } from './psicologo-routing.module';

import { PsicologoListComponent } from './psicologo-list/psicologo-list.component';
import { PsicologoDetailComponent } from './psicologo-detail/psicologo-detail.component';

@NgModule({
  imports: [ PsicologoRoutingModule ],
  declarations: [ PsicologoListComponent, PsicologoDetailComponent ]
})
export class PsicologoModule {
  constructor (@Optional() @SkipSelf() parentModule?: PsicologoModule) {
    if (parentModule) throw new Error('PsicologoModule is already loaded. Import it in the AppModule only');
  }
}