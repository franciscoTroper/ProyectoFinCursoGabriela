import { Routes } from '@angular/router';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { InicioComponent } from './inicio/inicio.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { CancionesComponent } from './canciones/canciones.component';
import { InterpretesComponent } from './interpretes/interpretes.component';
import { GenerosComponent } from './generos/generos.component';
import { MasNuevasComponent } from './masnuevas/masnuevas.component';
import { CancionUnicaComponent } from './cancion-unica/cancion-unica.component';




export const routes: Routes = [

    {
        "path": 'inicio', component: InicioComponent
    },
    
    {
        "path": 'cabecero', component: CabeceroComponent
    },
    {
        "path": 'publicidad', component: PublicidadComponent
    },    
    {
        "path": 'piepagina', component: PiePaginaComponent
    },
    {
        "path": 'canciones', component: CancionesComponent
    },
    {
        "path": 'interpretes/:nombre', component: InterpretesComponent
    },
    {
        "path": 'generos/:nombre', component: GenerosComponent
    },
    {
        "path": "cancionUnica/:nombreg", component:CancionUnicaComponent
    },
    {
        "path":'masnuevas', component:MasNuevasComponent
    },
    {
        "path": 'piePagina', component: PiePaginaComponent 
    },
    {
        "path":"",redirectTo: "inicio", pathMatch: "full"
    },
    {
        "path":"**", "component": PaginaErrorComponent
    }
]

    






