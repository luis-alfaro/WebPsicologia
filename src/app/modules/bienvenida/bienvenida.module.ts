import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BienvenidaRoutingModule } from './bienvenida-routing.module';

import { BienvenidaComponent } from './bienvenida/bienvenida.component';

@NgModule({
  imports: [ BienvenidaRoutingModule ],
  declarations: [ BienvenidaComponent ]
})
export class BienvenidaModule {
  constructor (@Optional() @SkipSelf() parentModule?: BienvenidaModule) {
    if (parentModule) throw new Error('BienvenidaModule is already loaded. Import it in the AppModule only');
  }
}