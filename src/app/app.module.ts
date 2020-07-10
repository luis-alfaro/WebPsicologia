import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BienvenidaComponent } from './modules/public/bienvenida/bienvenida.component';
import { PacienteListComponent } from './modules/pacientes/paciente-list/paciente-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BienvenidaComponent, PacienteListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
