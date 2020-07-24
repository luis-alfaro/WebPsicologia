import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { LayoutPublicComponent } from './route-components/layout-public/layout-public.component';
import { LayoutUserComponent } from './route-components/layout-user/layout-user.component';
import { NotFoundComponent } from './route-components/not-found/not-found.component';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule, CoreModule ],
  declarations: [ AppComponent, LayoutPublicComponent, LayoutUserComponent, NotFoundComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
