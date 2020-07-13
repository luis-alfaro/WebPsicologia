import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const CoreRouting = RouterModule.forChild([
    { path: '404', component: NotFoundComponent }
]);