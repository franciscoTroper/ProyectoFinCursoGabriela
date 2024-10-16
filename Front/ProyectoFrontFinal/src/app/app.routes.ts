import { Routes } from '@angular/router';
import { CancionesComponent } from './canciones/canciones.component';
import { InterpretesComponent } from './interpretes/interpretes.component';
import { GenerosComponent } from './generos/generos.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { MasNuevasComponent } from './masnuevas/masnuevas.component';



export const routes: Routes = [

    {
        "path": 'canciones', component: CancionesComponent
    },
    {
        "path": 'interpretes', component: InterpretesComponent
    },
    {
        "path": 'generos', component: GenerosComponent
    },
    {
        "path":'masnuevas', component:MasNuevasComponent
    }, 
    {
        "path":"",redirectTo: "canciones", pathMatch: "full"
    },
    {
        "path":"**", "component": PaginaErrorComponent
    } 
    




];
