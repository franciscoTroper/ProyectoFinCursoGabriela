import { Routes } from '@angular/router';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { InicioComponent } from './inicio/inicio.component';
import { CancionesComponent } from './canciones/canciones.component';
import { GenerosComponent } from './generos/generos.component';
import { InterpretesComponent } from './interpretes/interpretes.component';

export const routes: Routes = [

    
    {"path":"canciones",component:CancionesComponent},
    {"path":"generos",component:GenerosComponent},
    {"path":"interpretes",component:InterpretesComponent},
    {"path":"",redirectTo:"Inicio",pathMatch:"full"},
    {"path":"**","component": InicioComponent}
];
