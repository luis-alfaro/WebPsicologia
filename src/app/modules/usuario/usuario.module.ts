import { NgModule, Optional, SkipSelf } from '@angular/core';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';

@NgModule({
  imports: [ UsuarioRoutingModule, SharedModule ],
  declarations: [ UsuarioListComponent, UsuarioDetailComponent ]
})
export class UsuarioModule {
  constructor (@Optional() @SkipSelf() parentModule?: UsuarioModule) {
    if (parentModule) throw new Error('UsuarioModule is already loaded. Import it in the AppModule only');
  }
}