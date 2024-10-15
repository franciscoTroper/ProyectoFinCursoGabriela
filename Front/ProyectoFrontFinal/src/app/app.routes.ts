import { Routes } from '@angular/router';
import { CancionesComponent } from './canciones/canciones.component';
import { InterpretesComponent } from './interpretes/interpretes.component';
import { GenerosComponent } from './generos/generos.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { MasNuevasComponent } from './mas-nuevas/mas-nuevas.component';
import { MasDescargadasComponent } from './mas-descargadas/mas-descargadas.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [

    {
        "path": 'inicio', component: InicioComponent
    },
    {
        "path": 'canciones', component: CancionesComponent
    },
    {
        "path": 'masdescargadas', component: MasDescargadasComponent
    },
    {
        "path": 'masnuevas', component: MasNuevasComponent
    },
    // {
    //     "path": '', component: InterpretesComponent
    // },
    // {
    //     "path": '', component: GenerosComponent
    // },
    // {
    //     "path": '', component: CabeceroComponent
    // },
    // {
    //     "path": '', component: PiePaginaComponent
    // },
    // {
    //     "path":'', component:MasNuevasComponent
    // }, 
    {
        "path":"",redirectTo: "inicio", pathMatch: "full"
    },
    {
        "path":"**", "component": PaginaErrorComponent
    } 
    




];
