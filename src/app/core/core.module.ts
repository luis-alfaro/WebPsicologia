import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreRouting } from './core.routing';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [ CoreRouting ],
  declarations: [ NotFoundComponent ],
  exports: [ NotFoundComponent ]
})
export class CoreModule { }