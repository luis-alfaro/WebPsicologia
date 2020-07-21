import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';

import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { PublicComponent } from './public/public.component';

@NgModule({
  imports: [ PublicRoutingModule ],
  declarations: [ BienvenidaComponent, ContactanosComponent, PublicComponent ]
})
export class PublicModule { }