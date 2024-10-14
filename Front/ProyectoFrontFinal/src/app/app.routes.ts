import { Routes } from '@angular/router';
import { CancionesComponent } from './canciones/canciones.component';
import { InterpretesComponent } from './interpretes/interpretes.component';
import { GenerosComponent } from './generos/generos.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';

export const routes: Routes = [

    {
        "path": '', component: CancionesComponent
    },
    {
        "path": '', component: InterpretesComponent
    },
    {
        "path": '', component: GenerosComponent
    },
    {
        "path": '', component: CabeceroComponent
    },
    {
        "path": '', component: PiePaginaComponent
    },
    {
        "path":"",redirectTo: "canciones", pathMatch: "full"
    },
    {
        "path":"**", "component": PaginaErrorComponent
    }  




];
