import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ContactanosRoutingModule } from './contactanos-routing.module';

import { ContactanosComponent } from './contactanos/contactanos.component';

@NgModule({
  imports: [ ContactanosRoutingModule ],
  declarations: [ ContactanosComponent ]
})
export class ContactanosModule {
  constructor (@Optional() @SkipSelf() parentModule?: ContactanosModule) {
    if (parentModule) throw new Error('ContactanosModule is already loaded. Import it in the AppModule only');
  }
}