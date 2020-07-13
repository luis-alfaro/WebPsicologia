//import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
//import { AppModule } from '../../app.module';
import { PublicRouting } from './public.routing';
import { ContactanosComponent } from './contactanos/contactanos.component';

@NgModule({
  imports: [ PublicRouting ],
  declarations: [ BienvenidaComponent, ContactanosComponent ]
})
export class PublicModule { }