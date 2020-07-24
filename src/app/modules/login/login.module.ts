import { NgModule, Optional, SkipSelf } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [ LoginRoutingModule ],
  declarations: [ LoginComponent ]
})
export class LoginModule {
  constructor (@Optional() @SkipSelf() parentModule?: LoginModule) {
    if (parentModule) throw new Error('CoreLoginModuleModule is already loaded. Import it in the AppModule only');
  }
}