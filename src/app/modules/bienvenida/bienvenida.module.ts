import { NgModule } from '@angular/core';
import { BienvenidaRoutingModule } from './bienvenida-routing.module';

import { BienvenidaComponent } from './bienvenida/bienvenida.component';

@NgModule({
  imports: [ BienvenidaRoutingModule ],
  declarations: [ BienvenidaComponent ]
})
export class BienvenidaModule { constructor(){console.log('BienvenidaModule')} }