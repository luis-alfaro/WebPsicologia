import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { UsuarioServiceI } from './servicesI/usuario.serviceI';
import { PacienteServiceI } from './servicesI/paciente.serviceI';

import { UsuarioFactory } from './factories/usuario.factory';
import { PacienteMockService } from './servicesMock/paciente-mock.service';

@NgModule({
  imports: [ SharedModule ],
  providers: [
    { provide: UsuarioServiceI, useFactory: UsuarioFactory },
    { provide: PacienteServiceI, useClass: PacienteMockService }
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) throw new Error('CoreModule is already loaded. Import it in the AppModule only');
  }
}