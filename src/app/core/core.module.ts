import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { UsuarioService } from './services/usuario.service';
import { PacienteService } from './services/paciente.service';

@NgModule({
  imports: [ SharedModule ],
  providers: [ UsuarioService, PacienteService ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) throw new Error('CoreModule is already loaded. Import it in the AppModule only');
  }
}