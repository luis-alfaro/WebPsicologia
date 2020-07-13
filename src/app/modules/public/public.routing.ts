import { RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

export const PublicRouting = RouterModule.forChild([
    { path: '', component: BienvenidaComponent },
    { path: 'contactanos', component: ContactanosComponent }
]);