import { Routes } from '@angular/router';
import { CancionesComponent } from './canciones/canciones.component';
import { InterpretesComponent } from './interpretes/interpretes.component';
import { GenerosComponent } from './generos/generos.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { MasNuevasComponent } from './masnuevas/masnuevas.component';
import { InicioComponent } from './inicio/inicio.component';


export const routes: Routes = [

    {
        "path": 'canciones', component: CancionesComponent
    },
    {
        "path": 'inicio', component: InicioComponent
    },
    {
        "path": 'interpretes', component: InterpretesComponent
    },
    {
        "path": 'generos', component: GenerosComponent
    },

    {
        "path": 'cabecero', component: CabeceroComponent
    },
    {
        "path": 'piePagina', component: PiePaginaComponent
    },
    {
        "path":'masnuevas', component:MasNuevasComponent
    }, 
    {
        "path":"",redirectTo: "inicio", pathMatch: "full"
    },
    {
        "path":"**", "component": PaginaErrorComponent
    } 
    




];
