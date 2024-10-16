import { Routes } from '@angular/router';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { InicioComponent } from './inicio/inicio.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { CancionesComponent } from './canciones/canciones.component';
import { InterpretesComponent } from './interpretes/interpretes.component';
import { GenerosComponent } from './generos/generos.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { MasNuevasComponent } from './masnuevas/masnuevas.component';




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

    





];
