import { NgModule } from '@angular/core';
import { ErroresRoutingModule } from './errores-routing.module';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [ ErroresRoutingModule ],
  declarations: [NotFoundComponent]
})
export class ErroresModule { }