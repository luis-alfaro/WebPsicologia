import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ErroresRoutingModule } from './errores-routing.module';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [ ErroresRoutingModule ],
  declarations: [NotFoundComponent]
})
export class ErroresModule {
  constructor (@Optional() @SkipSelf() parentModule?: ErroresModule) {
    if (parentModule) throw new Error('ErroresModule is already loaded. Import it in the AppModule only');
  }
}