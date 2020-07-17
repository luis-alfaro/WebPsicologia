import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';

import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

@NgModule({
  imports: [ PublicRoutingModule ],
  declarations: [ BienvenidaComponent, ContactanosComponent ]
})
export class PublicModule { }